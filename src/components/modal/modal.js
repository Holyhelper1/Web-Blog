import { useSelector } from 'react-redux';
import { Button } from '../button/button.js';
import styled from 'styled-components';
import {
	selectModalIsOpen,
	selectModalOnCancel,
	selectModalOnConfirm,
	selectModalText,
} from '../../selectors';

const ModalContainer = ({ className }) => {
	const isOpen = useSelector(selectModalIsOpen);
	const text = useSelector(selectModalText);
	const onConfirm = useSelector(selectModalOnConfirm);
	const onCancel = useSelector(selectModalOnCancel);

	if (!isOpen) {
		return null;
	}

	return (
		<div className={className}>
			<div className="overlay"></div>
			<div className="box">
				<h3>{text}</h3>
				<div className="buttons">
					<Button width={'120px'} onClick={onConfirm}>
						Да
					</Button>
					<Button width={'120px'} onClick={onCancel}>
						Отмена
					</Button>
				</div>
			</div>
		</div>
	);
};

export const Modal = styled(ModalContainer)`
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 20;

& .overlay {
position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.7);
}
& .box {
text-align: center;
	position: relative;
	top: 50%;
	transform: translate(0, -50%);
	width: 400px;
	margin: 0 auto;
	background-color: #fff;
	border: 1px solid #000;
padding: 0 20px 20px;
	z-index: 30;
}
& .buttons {
	display: flex;
	justify-content: center;
}
& .buttons button {
	margin: 0 5px;
}
`;
