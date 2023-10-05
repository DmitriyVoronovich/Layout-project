import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styled/Theme";

export const Logo = () => {
    return (
        <StyledLogo>
            <StyledLogoText>Fast</StyledLogoText>
            <span>Delivery</span>
        </StyledLogo>
    );
};

const StyledLogo = styled.div`
  color: ${Theme.colors.primaryFont};
  font-family: Nova Script, serif;
  font-size: 23px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`

const StyledLogoText = styled.span`
  color: ${Theme.colors.secondaryFont};
  margin-right: 10px;
`