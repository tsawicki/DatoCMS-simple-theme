import React from "react";
import { useQuery } from "graphql-hooks";
import { useParams } from "react-router-dom";
import { SinglePost } from "../components/SinglePost/SinglePost";
import { Loader } from "../components/Loader/Loader";

export const Post: React.FC = () => {
  const POST_QUERY = `query Post($slug: String) {
    allArticles(filter: {slug: {eq: $slug}}) {
      id
      title
      content
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

  const { slug } = useParams<{ slug: string }>();

  const { loading, error, data } = useQuery(POST_QUERY, {
    variables: {
      slug,
    },
  });

  if (loading) return <Loader />;
  if (error) return <div>Error :(</div>;

  const blogPost = data.allArticles[0];
  if (!blogPost) return null;
  return <SinglePost isSnippet={false} post={blogPost} />;
};
