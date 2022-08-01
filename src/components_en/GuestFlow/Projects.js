import React, { useEffect } from "react";
import { BackToProfile, Table } from "../GuestFlow";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Spinner";
import { fetchProjectsEn } from "../../features/guest/guestSlice";

const Projects = () => {
  const dispatch = useDispatch();
  const { projects, isLoading, } = useSelector(
    (state) => state.guest
  );

  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchProjectsEn({ id }));
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
          name={projects.data.projects.user.name_en}
          role={projects.data.projects.user.role_en}
          userId={projects.data.projects._id}
        ></BackToProfile>
        <Table
          data={projects.data.projects.portfolio}
          title="Projects Completed"
          flag="projects"
          userId={projects.data.projects._id}
        ></Table>
      </>
    );
  }
  return null;
};
export default Projects;