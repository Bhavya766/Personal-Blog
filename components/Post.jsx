import React from "react";
import Link from "next/link";
import Image from "next/image";

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
            <Image
              src={urlFor(mainImage)}
              width={400}
              height={200}
              alt="post-image"
              className="post-image"
            />
          </div>
          <div className="post-card-text">
            <p className="post-card-title">{title}</p>
            <p className="post-card-desc">{description}</p>
            <div className="post-card-author">
              <Image
                src={urlFor(authorImage)}
                alt="author-image"
                className="post-card-author-image"
              />
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
