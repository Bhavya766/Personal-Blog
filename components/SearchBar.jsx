import React from "react";
import { BiBookmarks } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search article you want..."
      ></input>
      <BiBookmarks className="saved-post" />
    </div>
  );
};

export default SearchBar;
