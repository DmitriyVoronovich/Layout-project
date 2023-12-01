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
                    <Button name={'facebook'} viewBox={'0 0 65 40'} color={'blue'}/>
                    <Button name={'google'} viewBox={'0 0 65 40'} color={'#EC146FFF'}/>
                    <Button name={'twitter'} viewBox={'0 0 65 40'} color={'aquamarine'}/>
                </ButtonContainer>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  ${Container} {
    max-width: 274px;
    //border: 1px solid red;
    display: flex;
    flex-direction: column;
    color: #ec146f;
    padding: 4.7vh 5.55vw 0 3.3vw;
  }

  ul {
    margin-top: 15.12vh;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 15.5vh;
`