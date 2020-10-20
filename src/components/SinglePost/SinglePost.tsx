import React from "react";
import Markdown from "markdown-to-jsx";
import { Link } from "react-router-dom";
import { Post } from "../../interfaces/post";
import { formatDate } from "../../helpers/date";
import {
  StyledMainImage,
  StyledTextContainer,
  StyledTitle,
  StyledDate,
  StyledCategory,
  StyledPost,
} from "./SinglePost.styled";

interface SinglePostProps {
  post: Post;
  isSnippet: boolean;
}

export const SinglePost: React.FC<SinglePostProps> = ({ post, isSnippet }) => {
  if (!post) return null;
  return (
    <div>
      {isSnippet ? (
        <Link to={`/post/${post.slug}`}>
          <StyledMainImage data={post.mainImage.responsiveImage} />
        </Link>
      ) : (
        <StyledMainImage data={post.mainImage.responsiveImage} />
      )}

      <StyledTextContainer>
        <StyledTitle>
          {isSnippet ? (
            <Link to={`/post/${post.slug}`}>{post.title}</Link>
          ) : (
            <>{post.title}</>
          )}
        </StyledTitle>
        <StyledDate>Posted: {formatDate(post._createdAt || "")}</StyledDate>
        {post.categories &&
          post.categories?.length > 0 &&
          post.categories.map((category: any) => (
            <Link to={`/category/${category.slug}`} key={category.slug}>
              <StyledCategory>{category.name}</StyledCategory>
            </Link>
          ))}
        <StyledPost>
          {isSnippet ? (
            <>{post.excerpt}</>
          ) : (
            <Markdown>{post.content || ""}</Markdown>
          )}
        </StyledPost>
      </StyledTextContainer>
    </div>
  );
};
