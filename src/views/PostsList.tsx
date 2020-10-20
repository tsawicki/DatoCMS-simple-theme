import React, { useEffect, useState } from "react";
import { useQuery } from "graphql-hooks";
import { Loader } from "../components/Loader/Loader";
import { Pagination } from "../components/Pagination/Pagination";
import { Post } from "../interfaces/post";
import { SinglePost } from "../components/SinglePost/SinglePost";
import { useLocalStorage } from "../helpers/useLocalStorage";

const HOMEPAGE_QUERY = `query HomePage($limit: IntType, $offset: IntType) {
  _allArticlesMeta {
    count
  }
  allArticles(first: $limit, skip: $offset, orderBy: _createdAt_DESC) {
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

export function PostsList() {
  const [perPage, setPerPage] = useLocalStorage("perPage", 10);
  const [page, setPage] = useState(0);
  const [pagesCount, setPagesCount] = useState(0);

  const { loading, error, data } = useQuery(HOMEPAGE_QUERY, {
    variables: {
      limit: perPage,
      offset: page * perPage,
    },
  });

  useEffect(() => {
    if (data) setPagesCount(Math.ceil(data._allArticlesMeta.count / perPage));
  }, [data, perPage]);

  if (loading) return <Loader />;
  if (error) return <div>Error :(</div>;

  return (
    <>
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
