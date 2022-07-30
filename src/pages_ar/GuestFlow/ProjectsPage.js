import React from "react";
import { Footer } from "../../components_ar";
import { Projects } from "../../components_ar/GuestFlow";
import { NavbarWelcome } from '../../components_ar/Navigations'

const ProjectsPage = () => {
  return (
    <main>
      <NavbarWelcome></NavbarWelcome>
      <Projects></Projects>
      <Footer></Footer>
    </main>
  );
};

export default ProjectsPage;


