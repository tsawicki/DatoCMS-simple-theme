import React from "react";
import styled from "styled-components";

export const StyledLoader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  > div {
    width: 80px;
    height: 80px;
    position: relative;
  }
  > div > div {
    position: absolute;
    border: 4px solid #000;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  > div > div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;

export const Loader = () => (
  <StyledLoader>
    <div>
      <div></div>
      <div></div>
    </div>
  </StyledLoader>
);
