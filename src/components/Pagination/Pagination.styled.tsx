import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 12px;
  button {
    outline: none;
  }
  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

export const StyledPageLink = styled.button`
  height: 30px;
  width: 30px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
  &.current {
    color: white;
    background: #333;
  }
  @media screen and (max-width: 600px) {
    height: 20px;
    width: 20px;
  }
`;

export const StyledTruncatedDots = styled.div`
  height: 30px;
  width: 30px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledSelect = styled.select`
  margin: 5px 5px 5px 30px;
  padding: 0 10px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

export const StyledNavigationButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  height: 30px;
  border-radius: 8px;
  margin: 5px;
  padding: 0 15px;
  font-weight: bold;
  &:disabled {
    opacity: 0.5;
  }
  @media screen and (max-width: 600px) {
    height: 20px;
  }
`;
