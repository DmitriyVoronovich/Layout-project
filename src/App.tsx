import './App.css';
import {Header} from "./loyout/header/Header";
import {Main} from "./loyout/sections/main/Main";
import styled from "styled-components";
import {AboutUs} from "./loyout/sections/about-us/AboutUs";


function App() {
    return (
        <StyledApp>
            <HeaderContainer>
                <Header/>
                <Main/>
            </HeaderContainer>
            <AboutUs/>
        </StyledApp>
    );
}

export default App;

const StyledApp = styled.div`
  margin: 0 auto;
`

const HeaderContainer = styled.div`
  height: 100%;
  display: flex;
  max-width: 1366px;
  min-height: 100%;
  margin: 0 auto;
`