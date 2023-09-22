import './App.css';
import Router from './router/Router';
import styled from 'styled-components';


function App() {
  return (
    <StDiv>
        <Router />
    </StDiv>
  );
}

export default App;
const StDiv = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
`
