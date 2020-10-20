import styled from "styled-components";
import { Image } from "react-datocms";

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

export const StyledTextContainer = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 20px auto 80px auto;
`;

export const StyledMainImage = styled(Image)`
  border-radius: 30px;
  @media screen and (max-width: 600px) {
    border-radius: 0;
    width: calc(100% + 20px);
    margin: 0 -10px;
  }
`;

export const StyledTitle = styled.h1`
  margin-bottom: 10px;
  a {
    color: inherit;
    text-decoration: none !important;
  }
  @media screen and (max-width: 600px) {
    font-size: 32px;
  }
  @media screen and (max-width: 400px) {
    font-size: 24px;
  }
`;

export const StyledCategory = styled.div`
  display: inline-block;
  background: #f6f6f6;
  border-radius: 30px;
  color: #444;
  font-size: 10px;
  letter-spacing: 1.7px;
  text-transform: uppercase;
  padding: 3px 10px;
  margin-right: 5px;
  margin-bottom: 5px;
  box-shadow: none;
  a {
    color: inherit;
    text-decoration: none !important;
  }
  :hover {
    background: #e8e8e8;
    transition: 0.4s all ease-in-out;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
  }
`;

export const StyledDate = styled.div`
  color: #777;
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const StyledPost = styled.div`
  h1 {
    font-size: 42px;
  }

  h2 {
    font-size: 32px;
  }

  h3 {
    font-size: 28px;
  }

  h4 {
    font-size: 24px;
  }

  h5 {
    font-size: 20px;
  }

  h6 {
    font-size: 16px;
  }

  a {
    color: inherit;
  }
  p {
    margin-bottom: 20px;
  }
`;
