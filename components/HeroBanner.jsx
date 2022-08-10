import Link from "next/link";
import React from "react";

import { urlFor } from "../lib/client";

const HeroBanner = ({
  bannerData: { _id, title, image, description, buttonText, slug },
}) => {
  return (
    <div className="hero-banner">
      <h1 className="header banner-headline"> Article of The Week</h1>
      <div className="banner-container">
        <div className="banner-child banner-text">
          <h1 className="banner-title">{title}</h1>
          <p className="banner-description light">{description}</p>
          <Link href={`/posts/${slug.current}`}>
            <button type="button" className="hero-button">
              {buttonText}
            </button>
          </Link>
        </div>
        <div className="banner-child">
          <img
            src={urlFor(image)}
            alt="pyramid"
            className="hero-banner-image"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
