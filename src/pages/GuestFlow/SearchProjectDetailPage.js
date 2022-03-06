import React from "react";
import { Navbar, Footer } from "../../components";
import { SearchProjectDetail } from "../../components/GuestFlow";

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
