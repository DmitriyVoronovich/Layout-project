import './App.css';
import {Header} from "./loyout/header/Header";
import {Main} from "./loyout/sections/main/Main";
import styled from "styled-components";


function App() {
    return (
        <div className="App">
            <HeaderContainer>
                <Header/>
                <Main/>
            </HeaderContainer>
        </div>
    );
}

export default App;

const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
display: flex;
`