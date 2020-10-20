import React from "react";
import {
  StyledContainer,
  StyledPageLink,
  StyledSelect,
  StyledNavigationButton,
  StyledTruncatedDots,
} from "./Pagination.styled";
import { createPagesArray } from "./createPagesArray";

interface PaginationProps {
  currentPage: number;
  totalPagesNumber: number;
  onPageChange: (newPage: number) => void;
  pageSize: number;
  pageSizeOptions: Array<number>;
  onPageSizeChange: (newPageSize: number) => void;
}

export function Pagination({
  currentPage,
  totalPagesNumber,
  onPageChange,
  pageSize,
  pageSizeOptions,
  onPageSizeChange,
}: PaginationProps) {
  const hasPrevious = currentPage !== 0;
  const hasNext = currentPage !== totalPagesNumber - 1;

  const pagesArray = createPagesArray(currentPage, totalPagesNumber);

  if (pagesArray.length === 0) {
    return null;
  }

  return (
    <StyledContainer className="pagination">
      {totalPagesNumber > 1 && (
        <>
          <StyledNavigationButton
            onClick={() => onPageChange(currentPage - 1)}
            disabled={!hasPrevious}
          >
            Prev
          </StyledNavigationButton>
          {pagesArray.map((pageNumber, index) =>
            pageNumber === "..." ? (
              <StyledTruncatedDots
                key={"truncated-" + index}
                className="truncated"
              >
                ...
              </StyledTruncatedDots>
            ) : (
              <StyledPageLink
                key={pageNumber}
                className={currentPage + 1 === pageNumber ? "current" : ""}
                onClick={() => onPageChange(pageNumber - 1)}
              >
                {pageNumber}
              </StyledPageLink>
            )
          )}
          <StyledNavigationButton
            onClick={() => onPageChange(currentPage + 1)}
            disabled={!hasNext}
          >
            Next
          </StyledNavigationButton>
        </>
      )}
      <StyledSelect
        value={pageSize}
        onChange={(e) => {
          onPageSizeChange(Number(e.target.value));
        }}
      >
        {pageSizeOptions.map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Per Page: {pageSize}
          </option>
        ))}
      </StyledSelect>
    </StyledContainer>
  );
}
