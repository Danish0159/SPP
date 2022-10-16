import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { CommunityLayout } from "../../../Shared/CommunityLayout";

const EnrolledCourses = () => {
      const enrolledCourses = [
        {
          Name: "JS Course",
          Date: "Sept 13 - Oct 14 2021",
          Status: "Completed",
          Img: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b25saW5lJTIwY291cnNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          Name: "React Course",
          Date: "Sept 13 - Oct 14 2021",
          Status: "Completed",
          Img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          Name: "HTML Course",
          Date: "Sept 13 - Oct 14 2021",
          Status: "Completed",
          Img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y291cnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          Name: "Node Course",
          Date: "Sept 13 - Oct 14 2021",
          Status: "Completed",
          Img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y291cnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          Name: "JS Course",
          Date: "Sept 13 - Oct 14 2021",
          Status: "Completed",
          Img: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b25saW5lJTIwY291cnNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          Name: "React Course",
          Date: "Sept 13 - Oct 14 2021",
          Status: "Completed",
          Img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          Name: "HTML Course",
          Date: "Sept 13 - Oct 14 2021",
          Status: "Completed",
          Img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y291cnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          Name: "Node Course",
          Date: "Sept 13 - Oct 14 2021",
          Status: "Completed",
          Img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y291cnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          Name: "Python Course",
          Date: "Sept 13 - Oct 14 2021",
          Status: "Completed",
          Img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y291cnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          Name: "Hingrally Course",
          Date: "Sept 13 - Oct 14 2021",
          Status: "Completed",
          Img: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y291cnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
      ];

      const recommendedCourses = [
        {
          Name: "Node Course",
          Date: "Sept 13 - Oct 14 2021",
          Status: "Completed",
          Img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y291cnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          Name: "React Course",
          Date: "Sept 13 - Oct 14 2021",
          Status: "Completed",
          Img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          Name: "HTML Course",
          Date: "Sept 13 - Oct 14 2021",
          Status: "Completed",
          Img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y291cnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          Name: "Hingrally Course",
          Date: "Sept 13 - Oct 14 2021",
          Status: "Completed",
          Img: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y291cnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
      ];
      const [mappedArray, setMappedArray] = useState(enrolledCourses);
  return (
    <CommunityLayout>
      <div className="community__card">
        <Wrapper>
          <main>
            <h1
              onClick={() => {
                setMappedArray(enrolledCourses);
              }}
            >
              Enrolled Courses
            </h1>
            <h1
              onClick={() => {
                setMappedArray(recommendedCourses);
              }}
            >
              Recommended for you
            </h1>
          </main>
          <div className="courses__box">
            {mappedArray.map((s) => (
              <div>
                <img src={s.Img}  />
                <h1 className="course__name">{s.Name}</h1>
                <p>{s.Date}</p>
                <p>{s.Course}</p>
                <p>{s.Status}</p>
              </div>
            ))}
          </div>
        </Wrapper>
      </div>
    </CommunityLayout>
  );
};

export default EnrolledCourses;


const Wrapper = styled.div`
  color: white;
  margin: 0rem 1rem;
  main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4rem;
    @media only screen and (max-width: 850px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  main > h1 {
    cursor: pointer;
  }
  .courses__box {
    padding: 3rem 2rem;
    background-color: white;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 3rem;
    @media only screen and (max-width: 500px) {
        max-width: 100%;
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }}
  .courses__box > div {
    margin-bottom: 2rem;
    text-align: center;
  }
  .courses__box > div > p {
    color: var(--clr-blue-2);
    font-size: 1.6rem;
    font-weight: 500;
  }
  .courses__box > div > img {
    width: 100%;
  }
  .course__name{
    color: var(--clr-blue-2);
    font-size: 1.5rem;
  }
`;