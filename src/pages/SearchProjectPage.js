import React from "react";
import { Navbar, SearchProject, Footer } from "../components";

const SearchProjectPage = () => {
  return (
    <main>
      <Navbar page="welcome"></Navbar>
      <SearchProject></SearchProject>
      <Footer></Footer>
    </main>
  );
};

export default SearchProjectPage;
