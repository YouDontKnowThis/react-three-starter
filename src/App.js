import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./Header";
import Landing from "./Landing";
import Vsight from "./Vsight";

function App() {
  return (
    <>
      <GlobalStyle />
      <VRContainer>
        <Vsight />
      </VRContainer>
      <MainContainer>
        <Header />
        <Landing />
      </MainContainer>
    </>
  );
}

export default App;

const VRContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1;
`;

const MainContainer = styled.div`
  width: 70%;
  margin: auto;
  @media screen and (max-width: 426px) {
    width: 95%;
  }
`;
