import { Input, Stack } from "@mui/material";
import React from "react";
import logo from "../../../assets/logo.svg";
import { PATHS } from "../../../config/site-path";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../../config/color";
import { SearchIcon } from "../../../assets/icons/search-icons";

export const HeaderSearch = () => {
  return (
    <Stack
    borderRight={`1px solid ${COLORS.lunarRock}`}
    pr="64px"
    direction="row"
    gap="53px"
    alignItems="center"
    maxWidth="1153px"
    width="100%"
    >
      <Link to={PATHS.home}>
        <img src={logo} alt="logo" />
      </Link>
      <InputBlock>
        <SeachInput name="search" placeholder="Что вы хотите найти?" />
        <span className="search">
          <SearchIcon />
        </span>
      </InputBlock>
      <LinkBlock>
        <a href="tel: +7 4932 11-22-33">+7 (4932) 11-22-33</a>
        <p>Обратный звонок</p>
      </LinkBlock>
    </Stack>
  );
};

const LinkBlock = styled.div`
  a {
    color: #000;
    text-align: right;
    font-size: 16px;
    font-weight: 700;
  }
  p {
    color: ${COLORS.lunarRock};
    text-align: right;
    font-size: 12px;
    font-weight: 700;
  }
`;
const InputBlock = styled.div`
  flex-grow: 1;
  position: relative;

  .search {
    position: absolute;
    color: #000;
    cursor: pointer;
    right: 13px;
    top: 50%;
    transform: translateY(-45%);
    &:hover {
      color: ${COLORS.primary};
    }
  }

`;
const SeachInput = styled.input`
  border: 1px solid ${COLORS.lunarRock};
  display: block;
  width: 100%;
  color: ${COLORS.lunarRock};
  font-size: 14px;
  padding: 18px 24px;
  outline: none;
`;
