import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {Menu} from "./headerMenu/Menu";
import {Button} from "../../components/Button";


export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Logo/>
                <Menu/>
                <ButtonContainer>
                    <Button name={'facebook'} viewBox={'0 0 40 40'} />
                    <Button name={'google'} viewBox={'0 0 40 40'}/>
                    <Button name={'twitter'} viewBox={'0 0 40 40'}/>
                </ButtonContainer>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  ${Container} {
    max-width: 274px;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    padding: 4.7vh 5.55vw 0 3.3vw;
  }
  
  ul {
    margin-top: 15.12vh;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 19.99vh;
`