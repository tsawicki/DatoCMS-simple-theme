import React from "react";
import styled from "styled-components";
import { StyledContainer } from "../styled";

export const StyledFooter = styled.div`
  display: flex;
  height: 50px;
  margin-top: 50px;
  background: white;
  width: 100%;
  padding: 10px;
  z-index: 10;
  border-bottom: 1px solid #fefefe;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-size: 10px;
  color: #777;
  letter-spacing: 2px;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  a {
    color: inherit;
    text-decoration: none !important;
  }
`;

export const Footer = () => (
  <StyledFooter>
    <StyledContainer>
      ©2020 DatoCMS blog template. All rights reserved.
    </StyledContainer>
  </StyledFooter>
);
