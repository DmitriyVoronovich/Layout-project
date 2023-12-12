import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {SectionName} from "../../../components/SectionName";
import {Theme} from "../../../styled/Theme";
import {Icon} from "../../../components/icon/Icon";

type IconPropsType = {
    color: string
}

export const Services = () => {

    const information = [
        {
            id: 1, name: 'Courier',
            description: 'Lorem Ipsum is simply dummy text of the printing...',
            color: '#E2DEFF', iconId: 'Courier',
            width: '52px', height: '52px', viewBox: '0 0 55 55'
        },
        {
            id: 2, name: 'RESIDENTIAL MOVERS',
            description: 'Lorem Ipsum is simply dummy text of the printing...',
            color: '#E2F8D4', iconId: 'RESIDENTIAL',
            width: '55px', height: '55px', viewBox: '0 0 55 55'
        },
        {
            id: 3, name: 'PACKAGING',
            description: 'Lorem Ipsum is simply dummy text of the printing...',
            color: '#FFE1F0', iconId: 'PACKAGING',
            width: '64px', height: '49px', viewBox: '8 0 55 55'
        },
        {
            id: 4, name: 'COMMERCIAL MOVERS',
            description: 'Lorem Ipsum is simply dummy text of the printing...',
            color: '#FCFAC9', iconId: 'COMMERCIAL',
            width: '51px', height: '57px', viewBox: '0 0 55 55'
        },
        {
            id: 5, name: 'STORAGE',
            description: 'Lorem Ipsum is simply dummy text of the printing...',
            color: '#EBEBEB', iconId: 'STORAGE',
            width: '55px', height: '48px', viewBox: '0 -5 55 55'
        },
        {
            id: 6, name: 'INTERNATIONAL',
            description: 'Lorem Ipsum is simply dummy text of the printing...',
            color: '#D5F4F8', iconId: 'INTERNATIONAL',
            width: '68px', height: '47px', viewBox: '10 -12 50 50'
        },
    ];

    const icon = information.map(item => {
        return (
            <IconContainer key={item.id}>
                <IconWrapper color={item.color}>
                    <Icon iconId={item.iconId}
                          width={item.width}
                          height={item.height}
                          viewBox={item.viewBox}/>
                </IconWrapper>
                <IconName>{item.name}</IconName>
                <IconDescription>{item.description}</IconDescription>
            </IconContainer>
        )
    })

    return (
        <StyledServices>
            <Container>
                <SectionName firstName={'Our'}
                             secondName={'Services'}
                             description={'Lorem Ipsum is simply dummy text '}
                             height={'35px'}/>
                <ServicesText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries,
                </ServicesText>
                <ServicesIconContainer>
                    {icon}
                </ServicesIconContainer>
            </Container>
        </StyledServices>
    );
};

const StyledServices = styled.section`
  margin: 82px auto 0;
`

const ServicesText = styled.p`
  color: ${Theme.colors.textFont};
  text-align: center;
  font-family: Poppins, serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: 1090px;
  margin: 33px auto 0;
`

const ServicesIconContainer = styled.div`
  margin: 46px auto 0;
  display: flex;
  flex-wrap: wrap;
  max-width: 1173px;
  gap: 48px;
`

const IconContainer = styled.div`
  display: grid;
  grid-template-areas: 'a b' 'a c';
  column-gap: 28.5px;
  row-gap: 12px;
`

const IconWrapper = styled.div<IconPropsType>`
  grid-area: a;
  width: 102px;
  height: 90px;
  border-radius: 7px;
  background: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
`

const IconName = styled.h6`
  color: #000;
  text-align: start;
  font-family: Poppins, serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  grid-area: b;
`

const IconDescription = styled.p`
  color: ${Theme.colors.textFont};
  font-family: Poppins, serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  grid-area: c;
  width: 226px;
`