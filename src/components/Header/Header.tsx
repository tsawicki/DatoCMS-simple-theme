import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { StyledContainer } from "../styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  height: 50px;
  background: white;
  width: 100%;
  padding: 10px;
  z-index: 10;
  border-bottom: 1px solid #fefefe;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
  a {
    color: inherit;
    text-decoration: none !important;
  }
`;

export const StyledSubHeader = styled.div`
  width: 100%;
  height: 100px;
`;

export const StyledContentWrapper = styled.div`
  display: flex;
`;

export const StyledSearch = styled.form`
  margin-left: auto;
  input {
    border: 1px solid #dedede;
    height: 30px;
    border-radius: 10px 0 0 10px;
    border-right: none;
  }
`;

export const StyledSearchInput = styled.input`
  outline: none;
  padding: 2px 10px;
  color: #777;
`;

export const StyledSearchButton = styled.button`
  border: 1px solid #dedede;
  background: none;
  outline: none;
  height: 30px;
  border-radius: 0 10px 10px 0;
  border-left: none;
  color: #777;
`;

export const Header = () => {
  const history = useHistory();
  const [searchInput, setSearchInput] = useState("");
  const handleSearchSubmit = (e: any) => {
    e.preventDefault();
    setSearchInput("");
    history.push(`/search/${searchInput}`);
  };

  return (
    <>
      <StyledHeader>
        <StyledContainer>
          <StyledContentWrapper>
            <Link to="/">
              MY<b>BLOG</b>
            </Link>
            <StyledSearch onSubmit={handleSearchSubmit}>
              <StyledSearchInput
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <StyledSearchButton type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </StyledSearchButton>
            </StyledSearch>
          </StyledContentWrapper>
        </StyledContainer>
      </StyledHeader>
      <StyledSubHeader></StyledSubHeader>
    </>
  );
};
