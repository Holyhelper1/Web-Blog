import styled from 'styled-components';

const Div = styled.div`
	color: #4B0082;
	text-align: center;
	text-shadow: 2px 2px 4px #004050;
	background-color: #C0C0C0;
`;

function App() {
  return (
    <Div >
		<i className="fa fa-calendar fa-4x"> календарь заданий</i>
      <h1>Hello, World 123!</h1>
    </Div>
  );
}

export default App;
