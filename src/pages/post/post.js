import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useServerRequest } from '../../hooks';
import { Comments, PostContent } from '../post/components';

import { useParams } from 'react-router-dom';
import { loadPostsAsync } from '../../actions';
import { selectPost } from '../../selectors';

const PostContainer = ({ className }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const post = useSelector(selectPost);

	const params = useParams();

	useEffect(() => {
		dispatch(loadPostsAsync(requestServer, params.id));
	}, [dispatch, requestServer, params.id]);
	return (
		<div className={className}>
			<PostContent post={post} />
			<Comments comments={post.comments} postId={post.id} />
		</div>
	);
};

export const Post = styled(PostContainer)`
	margin: 40px 0px;
	padding: 0px 80px;
`;
