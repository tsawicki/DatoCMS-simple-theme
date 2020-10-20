import React, { useEffect, useState } from "react";
import { useQuery } from "graphql-hooks";
import { useParams } from "react-router-dom";
import { SinglePost } from "../components/SinglePost/SinglePost";
import { Post } from "../interfaces/post";
import { Loader } from "../components/Loader/Loader";
import { Pagination } from "../components/Pagination/Pagination";
import { useLocalStorage } from "../helpers/useLocalStorage";
import { StyledTopInfo } from "../components/styled";

const SEARCH_QUERY = `query SearchPage($limit: IntType, $offset: IntType, $filter: ArticleModelFilter) {
  _allArticlesMeta(filter: $filter) {
    count
  }
  allArticles(first: $limit, skip: $offset, filter: $filter, orderBy: _createdAt_DESC) {
    id
    title
    excerpt
    slug
    _createdAt
    categories {
      name
      slug
    }
    mainImage {
      responsiveImage(
        imgixParams: { fit: crop, w: 900, h: 500, auto: format }
      ) {
        srcSet
        webpSrcSet
        sizes
        src
        width
        height
        aspectRatio
        alt
        title
        bgColor
        base64
      }
    }
  }
}`;

export function Search() {
  const { searchTerm } = useParams<{ searchTerm: string }>();
  const [perPage, setPerPage] = useLocalStorage("perPage", 10);
  const [resultsCount, setResultsCount] = useState(0);
  const [page, setPage] = useState(0);
  const [pagesCount, setPagesCount] = useState(0);

  const { loading, error, data } = useQuery(SEARCH_QUERY, {
    variables: {
      limit: perPage,
      offset: page * perPage,
      filter: {
        OR: [
          { content: { matches: { pattern: searchTerm } } },
          { title: { matches: { pattern: searchTerm } } },
        ],
      },
    },
  });

  useEffect(() => {
    if (data) {
      console.log(data);
      setResultsCount(Number(data._allArticlesMeta.count));
      setPagesCount(Math.ceil(data._allArticlesMeta.count / perPage));
    }
  }, [data, perPage]);

  if (loading) return <Loader />;
  if (error) return <div>Error :(</div>;

  return (
    <>
      <StyledTopInfo>
        {resultsCount === 0 ? (
          <>
            Sorry, nothing found for: <b>{searchTerm}</b>
          </>
        ) : (
          <>
            {resultsCount} search result{resultsCount > 1 ? "s" : ""} for:{" "}
            <b>{searchTerm}</b>
          </>
        )}
      </StyledTopInfo>
      {data.allArticles.map((blogPost: Post) => (
        <SinglePost isSnippet post={blogPost} key={blogPost.id} />
      ))}
      <Pagination
        currentPage={page}
        totalPagesNumber={pagesCount}
        onPageChange={setPage}
        pageSize={perPage}
        pageSizeOptions={[1, 5, 10, 25]}
        onPageSizeChange={setPerPage}
      />
    </>
  );
}
