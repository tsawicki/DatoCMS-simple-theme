import React, { useEffect, useState } from "react";
import { useQuery } from "graphql-hooks";
import { useParams } from "react-router-dom";
import { SinglePost } from "../components/SinglePost/SinglePost";
import { Post } from "../interfaces/post";
import { Loader } from "../components/Loader/Loader";
import { Pagination } from "../components/Pagination/Pagination";
import { useGetCategoryIdBySlug } from "../helpers/useGetCategoryIdBySlug";
import { useLocalStorage } from "../helpers/useLocalStorage";
import { StyledTopInfo } from "../components/styled";

const CATEGORY_QUERY = `query CategoryPage($limit: IntType, $offset: IntType, $filter: ArticleModelFilter) {
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

export function Category() {
  const { slug } = useParams<{ slug: string }>();
  const [perPage, setPerPage] = useLocalStorage("perPage", 10);
  const [categoryPostCount, setCategoryPostCount] = useState(0);
  const [page, setPage] = useState(0);
  const [pagesCount, setPagesCount] = useState(0);
  const categoryId = useGetCategoryIdBySlug(slug);

  const { loading, error, data } = useQuery(CATEGORY_QUERY, {
    variables: {
      limit: perPage,
      offset: page * perPage,
      filter: { categories: { anyIn: categoryId } },
    },
  });

  useEffect(() => {
    if (data) {
      console.log(data);
      setCategoryPostCount(Number(data._allArticlesMeta.count));
      setPagesCount(Math.ceil(data._allArticlesMeta.count / perPage));
    }
  }, [data, perPage]);

  if (loading) return <Loader />;
  if (error) return <div>Error :(</div>;

  return (
    <>
      <StyledTopInfo>
        {categoryPostCount === 0 ? (
          <>
            Sorry, no posts in category: <b>{slug}</b>
          </>
        ) : (
          <>
            {categoryPostCount} post{categoryPostCount > 1 ? "s" : ""} in
            category: <b>{slug}</b>
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
