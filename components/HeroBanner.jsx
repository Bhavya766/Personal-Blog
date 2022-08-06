import Link from "next/link";
import React from "react";

import { urlFor } from "../lib/client";

const HeroBanner = ({
  bannerData: { title, image, description, buttonText },
}) => {
  return (
    <div className="hero-banner">
      <h1 className="header"> Article of The Week</h1>
      <div className="banner-container">
        <div className="banner-text">
          <h1 className="banner-title">{title}</h1>
          <p className="banner-description">{description}</p>
          <Link href="">
            <button type="button">{buttonText}</button>
          </Link>
        </div>
        <div className="hero-image">
          <img
            width={500}
            height={500}
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
