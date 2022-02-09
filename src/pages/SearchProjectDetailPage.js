import React from "react";
import { Navbar, SearchProjectDetail, Footer } from "../components";

const SearchProjectDetailPage = () => {
  return (
    <main>
      <Navbar page="welcome"></Navbar>
      <SearchProjectDetail></SearchProjectDetail>
      <Footer></Footer>
    </main>
  );
};

export default SearchProjectDetailPage;
