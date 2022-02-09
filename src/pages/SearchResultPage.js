import React from "react";
import { Navbar, SearchResult, Footer } from "../components";

const SearchResultPage = () => {
  return (
    <main>
      <Navbar page="welcome"></Navbar>
      <SearchResult></SearchResult>
      <Footer></Footer>
    </main>
  );
};

export default SearchResultPage;
