import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="user-profile">
        <img className="profile-image"></img>
        <div className="user-details">
          <h1 className="user-name">Bhavya Gada</h1>
          <p className="light">Member</p>
        </div>
      </div>
      <div className="recommended-articles"></div>
    </div>
  );
};

export default Sidebar;
