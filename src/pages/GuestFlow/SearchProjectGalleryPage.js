import React from "react";
import { Navbar, Footer } from "../../components";
import { SearchProjectGallery } from "../../components/GuestFlow";

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
