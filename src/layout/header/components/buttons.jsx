import { Stack } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { COLORS } from "../../../config/color";
import { Link } from "react-router-dom";
import { User } from '../../../assets/icons/user'
import { Star } from '../../../assets/icons/star'
import { Cart } from '../../../assets/icons/cart'

export const Buttons = () => {
  return<Stack>
    <HeaderLinkBlock>
        <User />
      <HeaderLink>Личный кабинет</HeaderLink>
      <Star />
      <HeaderLink>Избранное</HeaderLink>
      <Cart />
      <HeaderLink>Корзина</HeaderLink>
    </HeaderLinkBlock>
        </Stack>
};
const HeaderLinkBlock = styled.div`
display: flex;
`
const HeaderLink = styled(Link)`
  color: ${COLORS.black};
  display: flex;
  align-items: center;
  margin-left: 20px;
  &:not(:last-child) {
    margin-right: 55px;
  }
`;
