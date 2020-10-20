import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 10px;
`;

export const StyledTopInfo = styled.div`
  font-size: 20px;
  text-transform: uppercase;
  margin-top: 50px;
  margin-bottom: 50px;
  letter-spacing: 4px;
  @media screen and (max-width: 600px) {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 14px;
  }
`;
