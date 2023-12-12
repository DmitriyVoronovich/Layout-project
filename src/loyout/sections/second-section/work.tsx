import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styled/Theme";
import del from '../../../assets/image/delivery.png'

type ContentPropsType = {
    bg: string
}

export const Work = () => {

    const information = [
        {
            number: '01', name: 'ORDER',
            description: 'Lorem Ipsum is simply dummy text', color: '#2765C8'
        },
        {
            number: '02', name: 'Processing',
            description: 'Lorem Ipsum is simply dummy text', color: '#37D679'
        },
        {
            number: '03', name: 'Delivered',
            description: 'Lorem Ipsum is simply dummy text', color: '#FFAE00'
        },
    ];

    const element = information.map(item => {
        return (
            <ContentElement bg={item.color} key={item.name}>
                <ElementNumber>{item.number}</ElementNumber>
                <ElementName>{item.name}</ElementName>
                <ElementText>{item.description}</ElementText>
            </ContentElement>
        )
    })

    return (
        <StyledWork>
            <Container>
                <ImgWrapper>
                    <Img src={del}/>
                    <ImgBlock>
                        <BlockElement/>
                        <BlockElement/>
                    </ImgBlock>
                </ImgWrapper>
                <ContentContainer>
                    <ContentTitle><span>How</span> it works?</ContentTitle>
                    <ContentDescription>Lorem Ipsum is simply dummy text of the printing and typesetting</ContentDescription>
                    <ContentBlock>
                        {element}
                    </ContentBlock>
                </ContentContainer>
            </Container>
        </StyledWork>
    );
};

const StyledWork = styled.section`
  margin: 134.1px auto 0;

  ${Container} {
    display: flex;
  }
`

const ImgWrapper = styled.div`
  max-width: 518px;
  height: 338px;
  position: relative;
`

const ImgBlock = styled.div`
  width: 484px;
  height: 272px;
  background: ${Theme.colors.thirdFont};
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
`

const Img = styled.img`
  position: absolute;
  z-index: 3;
  bottom: 0;
  left: 39px;
`

const BlockElement = styled.div`
  background: #3B28B4;
  width: 212px;
  height: 100%;
  z-index: 2;
  clip-path: polygon(0 0, 65% 0, 100% 100%, 35% 100%);
`

const ContentContainer = styled.div`
  height: 272px;
  width: 900px;
  margin-left: 484px;
`

const ContentTitle = styled.h3`
  color: #000;
  font-family: Poppins, serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
margin: 68px 0 0 54px;
  
  & span {
    color: #4832DC;
  }
`

const ContentDescription = styled.p`
  color: #000;
  text-align: start;
  font-family: Poppins, serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 54px;
`

const ContentBlock = styled.div`
  display: flex;
  margin-top: 50px;
`

const ContentElement = styled.div<ContentPropsType>`
width: 300px;
  height: 130px;
  background-color: ${props => props.bg};
  display: flex;
  flex-direction: column;
  position: relative;
`
const ElementNumber = styled.div`
  width: 50px;
  height: 50px;
  padding: 13px 0 0 15px;
  border: 0.5px solid;
  background-color: #FFF;
  filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.21));
  border-radius: 50%;
  position: absolute;
  top: -25px;
  left: 125px;
`

const ElementName = styled.span`
  color: #FFF;
  text-align: center;
  font-family: Poppins, serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 35px auto 0;
`

const ElementText = styled.span`
  width: 200px;
  color: #F3F3F3;
  text-align: center;
  font-family: Poppins, serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  margin: 10px auto 0;
`