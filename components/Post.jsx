import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const PostCard = ({
  post: {
    _id,
    title,
    slug,
    description,
    authorName,
    authorImage,
    mainImage,
    publishedAt,
  },
}) => {
  return (
    <div>
      <Link href={`/posts/${slug.current}`}>
        <div className="post-card">
          <div className="image-div">
            <img
              src={urlFor(mainImage)}
              width={400}
              height={200}
              className="post-image"
            ></img>
          </div>
          <div className="post-card-text">
            <p className="post-card-title">{title}</p>
            <p className="post-card-desc">{description}</p>
            <div className="post-card-author">
              <img
                src={urlFor(authorImage)}
                className="post-card-author-image"
              ></img>
              <p className="post-card-author-name">
                <span className="light">by </span>
                {authorName}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default PostCard;
