import React from "react";
import { HeroBanner, Footer, Post } from "../components";

import { client } from "../lib/client";

export default function Home({ posts, bannerData }) {
  return (
    <div>
      <HeroBanner bannerData={bannerData.length && bannerData[0]} />
      <div className="card-container">
        <h1 className="header">Articles Match for You</h1>
        <div className="post-card-container">
          {posts?.slice(0, 3).map((post) => (
            <Post key={post._id} post={post}></Post>
          ))}
        </div>
        <h1 className="header">Trending Articles</h1>
        <div className="post-card-container">
          {posts?.slice(3, 6).map((post) => (
            <Post key={post._id} post={post}></Post>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const query = `*[_type=="post"]{
    _id,
    title,
    slug,
    description,
    "authorName":author->name,
    "authorImage":author->image,
    mainImage,
    publishedAt
  }`;
  const posts = await client.fetch(query);

  const bannerQuery = `*[_type=="banner"]{
    _id,
    title,
    image,
    description,
    buttonText,
    "slug":post->slug
  }`;
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { posts, bannerData }, // will be passed to the page component as props
  };
}
