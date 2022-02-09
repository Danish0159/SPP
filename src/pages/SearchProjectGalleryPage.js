import React from "react";
import { Navbar, SearchProjectGallery, Footer } from "../components";

const SearchProjectDetailPage = () => {
  return (
    <main>
      <Navbar page="welcome"></Navbar>
      <SearchProjectGallery></SearchProjectGallery>
      <Footer></Footer>
    </main>
  );
};

export default SearchProjectDetailPage;
