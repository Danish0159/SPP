import React from "react";
import { Navbar, Footer } from "../../components";
import { SingleProject } from "../../components/GuestFlow";

const SearchProjectDetailPage = () => {
  return (
    <main>
      <Navbar page="welcome"></Navbar>
      <SingleProject></SingleProject>
      <Footer></Footer>
    </main>
  );
};

export default SearchProjectDetailPage;