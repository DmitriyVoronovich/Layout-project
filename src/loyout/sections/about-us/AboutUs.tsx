import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {SectionName} from "../../../components/SectionName";
import dev from '../../../assets/image/deliver.png';
import box from '../../../assets/image/box.png';
import world from '../../../assets/image/world.png';
import {Theme} from "../../../styled/Theme";
import grop3 from '../../../assets/image/Group3.png'

type ContentNumberPropsType = {
    color: string
}

export const AboutUs = () => {
    const information = [
        {
            number: '01', name: 'FAST DELIVERY',
            description: 'Lorem Ipsum is simply dummy text of the printing', color: '#2765C8'
        },
        {
            number: '02', name: 'SECURED SERVICE',
            description: 'Lorem Ipsum is simply dummy text of the printing', color: '#37D679'
        },
        {
            number: '03', name: 'WORLDWIDE SHIPPING',
            description: 'Lorem Ipsum is simply dummy text of the printing', color: '#FFAE00'
        },
    ];

    const content = information.map(item => {
        return (
            <Content>
                <ContentNumber color={item.color}>
                    {item.number}
                </ContentNumber>
                <ContentArroy src={grop3}/>
                <ContentTitle>{item.name}</ContentTitle>
                <ContentText>{item.description}</ContentText>
            </Content>
        )
    })

    return (
        <StyledAboutUs>
            <Container>
                <SectionName firstName={'ABOUT'}
                             secondName={'US'}
                             description={'Lorem Ipsum is simply dummy text '}
                             height={'20px'}/>
                <SectionInformationContainer>
                    <ImgContainer>
                        <ImgWrapper>
                            <Img src={dev}/>
                        </ImgWrapper>
                        <ImgWrapper>
                            <Img src={box}/>
                        </ImgWrapper>
                        <ImgWrapper>
                            <Img src={world}/>
                        </ImgWrapper>
                    </ImgContainer>
                    <InformationContainer>
                        <InformationText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially unchanged.
                        </InformationText>
                        <ContentContainer>
                            {content}
                        </ContentContainer>
                    </InformationContainer>
                </SectionInformationContainer>
            </Container>
        </StyledAboutUs>
    );
};

const StyledAboutUs = styled.section`
    margin: 40px auto 107px;
`

const SectionInformationContainer = styled.div`
    display: flex;
    gap: 65px;
    margin: 100px 60px 0 110px;
`

const ImgContainer = styled.div`
    position: relative;
    width: 385.004px;
`
const ImgWrapper = styled.div`

    border-radius: 10px;
    background: #FFF;
    box-shadow: -20px 23px 14px 0 rgba(100, 100, 100, 0.23);
    overflow: hidden;

    &:first-child {
        z-index: 0;
        margin: 50px 0;
        width: 249.212px;
        height: 231.849px;
        flex-shrink: 0;

        & img {
            width: 300px;
            height: 283px;
            object-position: -40px;
        }
    }
}

;

&:nth-child(2) {
    top: 0;
    left: 205px;
    position: absolute;
    z-index: 1;
    width: 188.877px;
    height: 175.717px;

    & img {
        width: 268.769px;
        height: 179px;
        object-position: -35px;
    }
}

&:nth-child(3) {
    top: 200px;
    left: 230px;
    position: absolute;
    z-index: 2;
    width: 133.788px;
    height: 119.263px;

    & img {
        width: 223.243px;
        height: 142px;
        object-position: -35px;
    }
`

const Img = styled.img`
    object-fit: contain;
`

const InformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 733px;
`

const InformationText = styled.p`
    width: 733px;
    color: ${Theme.colors.textFont};
    font-family: Poppins, serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px;
`

const ContentContainer = styled.div`
    display: flex;
    gap: 40px;
`
const Content = styled.div`
    max-width: 214px;
    position: relative;
`

const ContentNumber = styled.div<ContentNumberPropsType>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    color: white;
    text-align: center;
    font-family: Poppins, serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-top: 15px;
`

const ContentArroy = styled.img`
    position: absolute;
    top: 25px;
    left: 55px;
`

const ContentTitle = styled.h4`
    color: ${Theme.colors.primaryFont};
    text-align: start;
    font-family: Poppins, serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 12.3px;
`

const ContentText = styled.p`
    color: #AAA;
    font-family: Poppins, serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    margin-top: 6.3px;
`
