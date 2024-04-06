import React from 'react';
import styled from "styled-components";
import {Theme} from "../styled/Theme";

type SectionNamePropsType = {
    firstName: string
    secondName?: string
    description: string
    height: string
};

type NamePropsType = {
    height: string
}

export const SectionName: React.FC<SectionNamePropsType> = (props) => {
    const {firstName, description, secondName, height} = props

    return (
        <NameContainer>
            <SectionNameStyled height={height}>
                <span>{firstName}</span> {secondName}
            </SectionNameStyled>
            <SectionTitle>
                <span>{firstName}</span> {secondName}
            </SectionTitle>
            <SectionText>
                {description}
            </SectionText>
        </NameContainer>
    );
};

const NameContainer = styled.div`
    margin: 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const SectionNameStyled = styled.span<NamePropsType>`
    & span {
        color: ${Theme.colors.thirdFont};
    }

    bottom: ${(props) => props.height};
    position: absolute;
    color: ${Theme.colors.primaryFont};
    text-align: center;
    font-family: Poppins, serif;
    font-size: 90px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.06;
    z-index: 0;
`

const SectionTitle = styled.h2`
    & span {
        color: ${Theme.colors.thirdFont};
    }

    margin: 59px 0 0;
    color: ${Theme.colors.primaryFont};
    text-align: center;
    font-family: Poppins, serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    z-index: 1;
`

const SectionText = styled.span`
    color: ${Theme.colors.primaryFont};
    text-align: center;
    font-family: Poppins, serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`