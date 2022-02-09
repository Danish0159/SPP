import React from "react";
import { Navbar, SearchProfile, Footer } from "../components";

const SearchProfilePage = () => {
  return (
    <main>
      <Navbar page="welcome"></Navbar>
      <SearchProfile></SearchProfile>
      <Footer></Footer>
    </main>
  );
};

export default SearchProfilePage;
