import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import deliv from '../../../assets/image/input.png'

export const InputSection = () => {
    return (
        <StyledInput>
            <Container>
                <InformationBlock>
                    <InputTitle>TRACK YOUR PRODUCT</InputTitle>
                    <SecondTitle>TRACK YOUR PRODUCT</SecondTitle>
                    <Input placeholder={'Enter your Order ID Here...'}/>
                    <InputButton>Track</InputButton>
                    <SectionText>Now you can track your Order easily</SectionText>
                </InformationBlock>
            </Container>
        </StyledInput>
    );
};

const StyledInput = styled.section`
  max-width: 83.47vw;
  height: 415px;
  border: 1px solid red;
  background-image: url(${deliv});
  margin: 0 auto;
`

const InformationBlock = styled.div`
  position: relative;
  width: 602px;
  height: 243px;
  margin: 86px 0 0 683px;
  border-radius: 15px;
  background-color: rgba(72, 50, 220, 0.6);
  padding: 41px 0 0 37px;
`

const InputTitle = styled.div`
  display: block;
  color: #FFF;
  text-align: start;
  font-family: Poppins, serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

const SecondTitle = styled.span`
  position: absolute;
  color: #FFF;
  text-align: center;
  font-family: Poppins, serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  opacity: 0.18;
  bottom: 155px;
  left: 20px;
`

const Input = styled.input`
  width: 530px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #FFF;
  padding-left: 21.5px;
  border: 0;
  margin-top: 16px;
  
  &::placeholder {
    color: #858585;
    text-align: start;
    font-family: Poppins, serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`

const InputButton = styled.button`
  position: absolute;
  width: 133px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #FFAE00;
  color: #FFF;
  text-align: center;
  font-family: Poppins, serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  top: 110px;
  right: 42px;
`

const SectionText = styled.h6`
  color: #FFF;
  text-align: start;
  font-family: Poppins, serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-top: 9.3px;
`