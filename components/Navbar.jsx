import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiHome, BiUpArrowAlt } from "react-icons/bi";
import { HiPencilAlt } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <Link href="/">SG</Link>
      </div>
      <div className="nav-link">
        <div className="primary-nav ">
          <div className="nav-items">
            <div className="nav-item">
              <BiHome />
            </div>
            <div className="nav-item">
              <HiPencilAlt />
            </div>
            <div className="nav-item">
              <CgProfile />
            </div>
          </div>
        </div>
        <div>
          <div className="nav-items ">
            <div className="nav-item">
              <FiSettings />
            </div>
            <div className="nav-item">
              <FiLogOut />
            </div>
          </div>
        </div>
      </div>
      <div className="conditional-menu">
        <div className="view-menu">
          {true ? <GiHamburgerMenu /> : <BiUpArrowAlt />}
        </div>
        <div className="view-menu">
          {true ? <AiOutlineLeft /> : <AiOutlineRight />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
