import React from 'react';
import styled from "styled-components";
import {Icon} from "./icon/Icon";

type ButtonPropsType = {
    color?: string
}

type IconPropsType = {
    name: string
    viewBox?: string
    color?: string
}

export const Button:React.FC<IconPropsType> = (props: IconPropsType) => {
    return (
        <StyledButton color={props.color}>
            <Link>
                <Icon iconId={props.name} viewBox={props.viewBox} width={'40px'} height={'40px'}/>
            </Link>
        </StyledButton>
    );
};

const StyledButton = styled.button<ButtonPropsType>`
  background-color: ${props => props.color || 'red'};
  width: 40px;
  height: 40px;
  border-radius: 50%;


`

const Link = styled.a`

`