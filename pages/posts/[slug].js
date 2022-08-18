import React from "react";
import { PortableText } from "@portabletext/react";
import { client, urlFor } from "../../lib/client";

const FullPost = ({ post }) => {
  const portableComponents = {
    types: {
      image: ({ value }) => (
        <img
          className="article-illustations"
          src={value.imageUrl}
          alt="body-image"
        ></img>
      ),
    },
  };
  return (
    <div className="article">
      <div className="published-date">
        <span>Published on: {post.publishedAt.slice(0, 10)} &nbsp;</span>
        <span>{post.publishedAt.slice(11, 16)}</span>
      </div>
      <div className="article-title">{post.title}</div>
      <div className="article-categories">
        {post.categories.map((category) => (
          <p key={category._id} className="category">
            {category.title} /
          </p>
        ))}
      </div>
      <div className="article-image">
        <img
          src={urlFor(post.mainImage)}
          className="article-image"
          alt="primary-image"
        ></img>
      </div>
      <div className="article-body">
        <PortableText
          value={post.body}
          components={portableComponents}
        ></PortableText>
      </div>
    </div>
  );
};

export default FullPost;

export const getStaticPaths = async () => {
  const query = `*[_type == "post"] {
    slug {
      current
    }
  }
  `;

  const posts = await client.fetch(query);

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "post" && slug.current == '${slug}'][0]{
    _id,
    title,
    slug,
    description,
    "authorName":author->name,
    "authorImage":author->image,
    mainImage,
    "categories":categories[]->{_id,title},
    publishedAt,
    body
  }`;

  const post = await client.fetch(query);

  return {
    props: { post },
  };
};
