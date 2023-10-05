import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import mainImg from '../../../assets/image/bus.png';
import img1 from '../../../assets/image/dev.png';
import img2 from '../../../assets/image/girl.png'
import {Theme} from "../../../styled/Theme";
import {Information} from "./Information";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <ImgContainer>
                    <MainImg src={mainImg}/>
                    <ImgWrapper>
                        <Img src={img1}/>
                        <Img src={img2}/>
                    </ImgWrapper>
                </ImgContainer>
                <InformationContainer>
                    <div>
                        <Link>Login</Link>
                        <span> / </span>
                        <Link>Register</Link>
                    </div>
                    <Information/>
                </InformationContainer>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  ${Container} {
    max-width: 1092px;
    padding-right: 3.4vw;
    display: flex;
  }
`
const ImgContainer = styled.div`
  width: 469px;
  height: 624px;
  position: relative;
`

const MainImg = styled.img`
  max-width: 469px;
  height: 624px;

`

const ImgWrapper = styled.div`
  position: absolute;
  display: flex;
  gap: 10px;
  left: 10px;
  bottom: 10px;
`

const Img = styled.img`
  border-radius: 10px;
`

const InformationContainer = styled.div`
  max-width: 589px;
  padding-top: 4.7vh;
  display: flex;
  flex-direction: column;
  align-items: end;
  
`

const Link = styled.a`
  color: ${Theme.colors.primaryFont};
  text-align: center;
  font-family: Poppins, serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`