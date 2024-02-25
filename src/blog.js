import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

const Content = styled.div`
	padding: 120px 0;
`;
const H2 = styled.h2`
	text-align: center;
`;

 const Header = () => {
	return (
		<div>
			<div>Блог о веб-разработке, шапка</div>
		</div>
	);
 };
 const Footer = () => {
	return (
		<div>
			<div>Футер</div>
		</div>
	);
 };



export const Blog = () => {
	return (
		<>
		<Header />
			<Content>

				<H2> Контент страницы !</H2>
				<Routes>
					<Route path="/" element={<div>Главная страница</div>} />
					<Route path="/login" element={<div>Авторизация</div>} />
					<Route path="/register" element={<div>Регистрация</div>} />
					<Route path="/users" element={<div>пользователи</div>} />
					<Route path="/post" element={<div>Статья</div>} />
					<Route path="/post/:postId" element={<div>Новая статья</div>} />
					<Route path="*" element={<div>ошибка</div>} />


				</Routes>
			</Content>
		<Footer />
		</>
	);
};
