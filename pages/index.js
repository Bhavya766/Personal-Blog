import React from "react";
import { HeroBanner, Footer, Post } from "../components";

import { client } from "../lib/client";

export default function Home({ posts, bannerData }) {
  return (
    <div>
      <HeroBanner bannerData={bannerData.length && bannerData[0]} />
      <h1 className="header">Articles for You</h1>
      <div className="post-card-container">
        {posts?.map((post) => (
          <Post key={post._id} post={post}></Post>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const query = `*[_type=="post"]`;
  const posts = await client.fetch(query);

  const bannerQuery = `*[_type=="banner"]`;
  const bannerData = await client.fetch(bannerQuery);
  return {
    props: { posts, bannerData }, // will be passed to the page component as props
  };
}
