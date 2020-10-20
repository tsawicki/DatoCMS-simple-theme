import React from "react";
import styled from "styled-components";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { StyledContainer } from "../styled";

export const StyleMainContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export const StyledContent = styled.div`
  flex: 1;
`;

export const Layout: React.FC = ({ children }) => {
  return (
    <StyleMainContainer>
      <Header></Header>
      <StyledContent>
        <StyledContainer>{children}</StyledContainer>
      </StyledContent>
      <Footer></Footer>
    </StyleMainContainer>
  );
};
