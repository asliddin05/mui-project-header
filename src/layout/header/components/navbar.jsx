import {Container, List, Stack, Button } from "@mui/material";
import React from "react";
import { COLORS } from '../../../config/color'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Burger } from '../../../assets/icons/burger'
const NavData = ['Cigarette', 'Odnorazki']

export const Navbar = () => {
  return (
    <Stack borderTop={`1px solid ${COLORS.lunarRock}`}>
        <Container sx={{display: "flex", alignItems: "center"}}>
            <List  sx={{display: "flex", paddingBlock: "19px", gap: "73px"}}
            pr="67px"
            >
                <li >
                        <NavbarLink to="/">Сигареты</NavbarLink>
                </li>
                <li>
                        <NavbarLink to="/">Одноразки</NavbarLink>
                </li>
                        <NavbarLink to="/">Iqos, glo</NavbarLink>
                <li>
                        <NavbarLink to="/">Pod-системы</NavbarLink>
                </li>
                <li>
                        <NavbarLink to="/">Жидкости</NavbarLink>
                </li>
                <li>
                        <NavbarLink to="/">Катриджи</NavbarLink>
                </li>
                <li>
                        <NavbarLink to="/">Кальянный табак</NavbarLink>
                </li>
                <li>
                        <NavbarLink to="/">Все для кальяна</NavbarLink>
                </li>
                <li>
                        <NavbarLink to="/">Аксессуары</NavbarLink>
                </li>
            </List>
            <Line></Line>
                <Burger />
            <Stack direction="row" alignItems="center">
                <button style={{marginLeft: "16px", cursor: "pointer"}}>
                    О компании</button>
            </Stack>
        </Container>
    </Stack>
  );
};

const Line = styled.span`
    display: inline-block;
    width: 1px;
    height: 64px;
    background-color: #C5C5C5;
    margin-inline: 72px;
`
const NavbarLink = styled(Link)`
    color: ${COLORS.black};
    font-size: 14px;
    letter-spacing: 0.7px;
`