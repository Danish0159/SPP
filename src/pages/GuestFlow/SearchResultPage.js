import React from "react";
import { Navbar, Footer } from "../../components";
import { SearchResult } from "../../components/GuestFlow";

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
