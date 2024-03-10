export const getCommentsCount = (comments = [], postId) => {
	const potsComments = comments.filter(({ postId: commentPostId }) => commentPostId === postId);
	return potsComments.length;
};
