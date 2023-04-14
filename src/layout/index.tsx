import React from "react";
import { Outlet } from "react-router-dom";
import { SearchNavBar } from "./searchNavBar";
import { Container, Content } from "./styles";
import Menu from './appBar/Navbar';

export const DefaultLayout: React.FC = () => {
  return (
    <Container>
      <SearchNavBar />
      <Menu />
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};
