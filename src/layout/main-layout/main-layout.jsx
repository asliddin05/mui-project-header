import React from "react";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const MainLayout = () => {
    return <Wrapper>
    <div className="wrapper">
    <Header /> 
    <main>
        <Outlet />
    </main>
    </div>
    <Footer />
    </Wrapper>
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`
export default MainLayout;