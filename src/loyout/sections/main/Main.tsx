import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import mainImg from '../../../assets/image/bus.png';
import img1 from '../../../assets/image/dev.png';
import img2 from '../../../assets/image/girl.png'
import {Theme} from "../../../styled/Theme";
import {Information} from "./Information";
import {Button} from "../../../components/Button";
import {Simulate} from "react-dom/test-utils";
import blur = Simulate.blur;
import {Icon} from "../../../components/icon/Icon";

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
                    <StyledFigure>
                        <span>Fast & Safe Delivery</span>
                    </StyledFigure>
                </ImgContainer>
                <InformationContainer>
                    <div>
                        <Link>Login</Link>
                        <span> / </span>
                        <Link>Register</Link>
                    </div>
                    <Information/>
                    <Button name={'arroyDown'} viewBox={'0 0 50 50'} color={'rgba(72, 50, 220, 1)'}/>
                    <ArrayWrapper>
                        <Icon iconId={'arrayLeft'} viewBox={'0 0 20 20'} height={'19px'} width={'30px'}/>
                        <Icon iconId={'arrayRight'} viewBox={'0 0 0 20'} height={'19px'} width={'30px'}/>
                    </ArrayWrapper>
                    <div>
                        <Icon iconId={'track'} width={'54'} height={'38'} viewBox={'0 8 55 25'}/>
                        <span>Track Your Order</span>

                    </div>

                </InformationContainer>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  ${Container} {
    max-width: 1092px;
    padding-right: 3vw;
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

const StyledFigure = styled.div`
  position: absolute;
  bottom: 34px;
  right: -125px;
  width: 288px;
  height: 70px;
  background: linear-gradient(-60deg, transparent 35px, #FFAE00 0);
  display: flex;
  align-items: center;
  padding-left: 30px;

  span {
    color: #FFF;
    text-align: center;
    font-family: Poppins, serif;
    font-size: 21px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
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
  position: relative;

  
  div:last-child {
    margin-top: 46.2px;
    position: relative;
    margin-right: 150px;
    
    &:before {
      position: absolute;
      content: '';
      width: 131.5px;
      height: 2px;
      background-color: #FFAE00;
      top: 35px;
      left: 73px;
    }

    &:after {
      position: absolute;
      content: '';
      width: 131.5px;
      height: 2px;
      background-color: #FFAE00;
      top: 35px;
      right: 80px;
    }
    
   span {
     width: 130px;
     left: 75px;
     color: #000;
     text-align: center;
     font-family: Poppins, serif;
     font-size: 15px;
     font-style: normal;
     font-weight: 400;
     line-height: normal;
     position: absolute;
   }
  }
`

const ArrayWrapper = styled.div`
  position: absolute;
  max-width: 100px;
  top: 96%;
  right: 86%;
  display: flex;
  align-items: center;
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