import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SearchBar from "./SearchBar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Sarcastic Guy</title>
      </Head>
      <nav className="navbar">
        <Navbar />
      </nav>
      <SearchBar />
      <main className="main">
        <main className="main-container">{children}</main>
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
};

export default Layout;
