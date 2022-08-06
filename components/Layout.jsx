import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SideBar from "./Sidebar";
import SearchBar from "./SearchBar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Sarcastic Guy</title>
      </Head>
      <header className="navbar">
        <Navbar />
      </header>
      <div className="main">
        <SearchBar />
        <main className="main-container">{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
      <SideBar />
    </div>
  );
};

export default Layout;
