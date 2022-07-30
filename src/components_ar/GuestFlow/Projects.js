import React, { useEffect } from "react";
import { BackToProfile, Table } from "../GuestFlow";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Spinner";
import { fetchProjects } from "../../features/guest/guestSlice";

const Projects = () => {
  const dispatch = useDispatch();
  const { projects, isLoading, } = useSelector(
    (state) => state.guest
  );

  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchProjects({ id }));
    // eslint-disable-next-line
  }, [id]);

  if (isLoading) {
    return (
      <div className="section-100vh">
        <Spinner />;
      </div>
    );
  }

  if (projects.data) {
    return (
      <>
        <BackToProfile
          avatar={projects.data.projects.profilePhoto}
          name={projects.data.projects.user.name_ar}
          role={projects.data.projects.user.role_ar}
          userId={projects.data.projects._id}
        ></BackToProfile>
        <Table
          data={projects.data.projects.portfolio}
          title="المشاريع المنجزة"
          flag="projects"
          userId={projects.data.projects._id}
        ></Table>
      </>
    );
  }
  return null;
};
export default Projects;