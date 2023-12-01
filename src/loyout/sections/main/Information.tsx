import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../styled/Theme";
import {Icon} from "../../../components/icon/Icon";

export const Information = () => {
    return (
        <StyledInformation>
            <StiledTitle>We Provide Best Courier & Parcel Service</StiledTitle>
            <TextContainer>
                <StyledText>Domestic</StyledText>
                <StyledText>International</StyledText>
                <StyledText>Vehicles</StyledText>
            </TextContainer>
            <ButtonContainer>
                <StyledButton>
                    <Icon iconId={'couriers'} viewBox={'0 0 38 38'} width={'36px'} height={'36px'}/>
                    <span>Courier</span>
                </StyledButton>
                <StyledButton>
                    <Icon iconId={'parcel'} viewBox={'0 0 38 38'} width={'36px'} height={'36px'}/>
                    <span>Parcel</span>
                </StyledButton>
            </ButtonContainer>
            <StyledText>Your Pincode</StyledText>
            <Field placeholder={'Enter your pincode here'}/>
            <Link>Get a Quote Now</Link>
        </StyledInformation>
    );
}

const StyledInformation = styled.div`
  max-width: 419px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 8.4vw;
  margin-top: 8.74vh;
  margin-right: 3.8vw;
  margin-bottom: 8.5px;
  
  span:nth-child(4) {
    align-self: start;
    padding-left: 45px;
  }
`

const StiledTitle = styled.h1`
  width: 429px;
  color: ${Theme.colors.primaryFont};
  text-align: center;
  font-family: Poppins, serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1px;
`

const TextContainer = styled.div`
  margin-top: 19px;
  display: flex;
  justify-content: space-between;
  width: 322px;
  border-bottom: 1px solid #E8E8E8;

  &:after {
    content: '';
    border-bottom: 1px solid #E8E8E8;
  }

  span:first-child {
    color: ${Theme.colors.thirdFont};
    padding-bottom: 9.5px;
    border-bottom: 2px solid ${Theme.colors.thirdFont};

    &:after {
      content: '';
      border-bottom: 2px solid ${Theme.colors.thirdFont};
    }
  }
`

const StyledText = styled.span`
  color: ${Theme.colors.primaryFont};
  font-family: Poppins, serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 19px;
  margin-bottom: 8.5px;

  button:first-child {
    border: 1px solid ${Theme.colors.thirdFont};
    background: ${Theme.colors.thirdFont};

    span {
      color: #FFF;
    }
  }
`

const StyledButton = styled.button`
  width: 155px;
  height: 73px;
  border-radius: 10px;
  background: #ECECF1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;

  span {
    color: ${Theme.colors.primaryFont};
    text-align: center;
    font-family: Poppins, serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`



const Field = styled.input`
  width: 328px;
  padding: 13px 0 12px 14.5px;
  color: #ABABAB;
  border-radius: 10px;
  background: #F3F3F3;
  font-family: Poppins, serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  margin-top: 11px;
`

const Link = styled.a`
  color: #4832DC;
  text-align: center;
  font-family: Poppins, serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 8.5px;
`