import styled from 'styled-components';

const Div = styled.div`
	color: red;
	text-align: center;
	text-shadow: 2px 2px 4px #004050;
`;

function App() {
  return (
    <Div >
		<i className="fa fa-calendar"></i>
      <h1>Hello, World 123!</h1>
    </Div>
  );
}

export default App;
