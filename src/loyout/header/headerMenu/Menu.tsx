import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../styled/Theme";

const menuData = [
    {
        name: 'Home',
        href: 'Home'
    },
    {
        name: 'About',
        href: 'About'
    },
    {
        name: 'Tracking',
        href: 'Tracking'
    },
    {
        name: 'Pricing',
        href: 'Pricing'
    },
    {
        name: 'Contact',
        href: 'Contact'
    },
    {
        name: 'Help',
        href: 'Help'
    }
]

export const Menu = () => {
    return (
        <ul>
            {menuData.map((item, index) => {
                return (
                    <MenuItem key={index}>
                        <Link href={item.href}>{item.name}</Link>
                    </MenuItem>
                )
            })}
        </ul>
    );
}

const MenuItem = styled.li`
  font-family: Poppins, serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 42px;
  text-transform: uppercase;
`

const Link = styled.a`
  color:${Theme.colors.primaryFont};
`