export function createPagesArray(currentPage: number, lastPage: number) {
  const pagesArray = [];
  const pagesArrayWithDots = [] as Array<number | "...">;

  for (let i = 1; i <= lastPage; i++)
    if (
      i === 1 ||
      i === lastPage ||
      (i >= currentPage - 1 && i <= currentPage + 3)
    ) {
      pagesArray.push(i);
    }

  let previousPageNumber: number;
  pagesArray.forEach((pageNumber) => {
    if (previousPageNumber) {
      if (pageNumber - previousPageNumber !== 1) pagesArrayWithDots.push("...");
    }
    pagesArrayWithDots.push(pageNumber);
    previousPageNumber = pageNumber;
  });

  return pagesArrayWithDots;
}
