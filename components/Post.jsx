import React, { useEffect } from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const PostCard = ({
  post: {
    title,
    slug,
    description,
    author,
    mainImage,
    categories,
    publishedAt,
    body,
  },
}) => {
  return (
    <div>
      <Link href={`/`}>
        <div className="post-card">
          <img
            src={urlFor(mainImage)}
            width={400}
            height={200}
            className="post-image"
          ></img>
          <p className="post-card-title">{title}</p>
          <p className="post-card-desc">{description}</p>
          <div className="post-card-author">
            {/* <img src={urlFor(author)} className="post-card-author-image"></img> */}
            <p className="post-card-author-name">
              <span className="light">by</span> {author.name}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
