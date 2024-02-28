import styled from 'styled-components';
import { Icon } from '../../../../components';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../../../components';
import { useSelector, useDispatch } from 'react-redux';
import {
	selectUserRole,
	selectUserLogin,
	selectUserSession,
} from '../../../../selectors';
import { ROLE } from '../../../../constants';
import { logout } from '../../../../actions';

const RightAlined = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const StyledIcon = styled.div`
	&:hover {
		cursor: pointer;
	}
`;

const UserName = styled.div`
	font-size: 18px;
	font-weight: bold;
	margin-right: 10px;
`;

const ControlPanelContainer = ({ className }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);

	return (
		<div className={className}>
			<RightAlined>
				{roleId === ROLE.GUEST ? (
					<Button>
						<Link to="/login">Войти</Link>
					</Button>
				) : (
					<>
						<UserName>{login}</UserName>
						<StyledIcon>
							<Icon
								id="fa-sign-out"
								margin="0 0 0 10px"
								onClick={() => dispatch(logout(session))}
							/>
						</StyledIcon>
					</>
				)}
			</RightAlined>
			<RightAlined>
				<StyledIcon onClick={() => navigate(-1)}>
					<Icon id="fa-backward" margin="10px 0 0 0px" />
				</StyledIcon>
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
