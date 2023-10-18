import { Container, Stack } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { HeaderSearch } from "./components/header-search";
import { Buttons } from './components/buttons'
import { Navbar } from './components/navbar'
export const Header = () => {
    return <header>
        <Container>
            <Stack direction="row" justifyContent="space-between" alignItems="center" p="25px 0 25px">
                <HeaderSearch />
                <Buttons />
            </Stack>
        </Container>
                <Navbar />
    </header>
}

