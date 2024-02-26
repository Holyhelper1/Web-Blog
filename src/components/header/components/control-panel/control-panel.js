import styled from 'styled-components';
import { Icon } from '../../../../components';
import { Link, useNavigate } from 'react-router-dom';

const RightAlined = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const StyledLink = styled(Link)`
	text-align: center;
	font-size: 18px;
	width: 100px;
	height: 32px;
	border: 1px solid #000;
	background-color: #b0c4de;
	box-shadow: 0 2px 3px #2f4f4f;
	&:hover {
		background-color: #2f4f4f;
		color: #fff;
	}
`;

const StyledButton = styled.div`
&:hover {
	cursor: pointer;
}
`

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	return (
		<div className={className}>
			<RightAlined>
				<StyledLink to="/login">Войти</StyledLink>
			</RightAlined>
			<RightAlined>
				<StyledButton onClick={() => navigate(-1)}>
					<Icon id="fa-backward" margin="10px 0 0 0px" />
				</StyledButton>
				<Link to="/posts">
					<Icon id="fa-file-text-o" margin="10px 0 0 16px" />
				</Link>
				<Link to="/users">
					<Icon id="fa-users" margin="10px 0 0 16px" />
				</Link>
			</RightAlined>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;

// продолжить с 10:01
