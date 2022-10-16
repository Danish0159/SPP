import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { CommunityLayout } from "../../../Shared/CommunityLayout";

const Communities = () => {
    const communityArray = [
      {
        Name: "Sense of Place",
        Request: "Member Requests (3)",
      },
      {
        Name: "Circle of Friends",
        Request: "Member Requests (4)",
      },
      {
        Name: "Community Cares",
        Request: "Member Requests (5)",
      },
      {
        Name: "Sense of Place",
        Request: "Member Requests (3)",
      },
      {
        Name: "Circle of Friends",
        Request: "Member Requests (4)",
      },
      {
        Name: "Community Cares",
        Request: "Member Requests (5)",
      },
      {
        Name: "Sense of Place",
        Request: "Member Requests (3)",
      },
      {
        Name: "Circle of Friends",
        Request: "Member Requests (4)",
      },
      {
        Name: "Community Cares",
        Request: "Member Requests (5)",
      },
    ];
    const joinedCommunity = [
      {
        Name: "Sense of Place",
        Request: "New Posts (3)",
      },
      {
        Name: "Circle of Friends",
        Request: "New Posts (3)",
      },
      {
        Name: "Community Cares",
        Request: "New Posts (3)",
      },
      {
        Name: "Sense of Place",
        Request: "New Posts (3)",
      },
      {
        Name: "Circle of Friends",
        Request: "New Posts (3)",
      },
      {
        Name: "Community Cares",
        Request: "New Posts (3)",
      },
      {
        Name: "Sense of Place",
        Request: "New Posts (3)",
      },
      {
        Name: "Circle of Friends",
        Request: "New Posts (3)",
      },
      {
        Name: "Community Cares",
        Request: "New Posts (3)",
      },
      {
        Name: "Sense of Place",
        Request: "New Posts (3)",
      },
      {
        Name: "Circle of Friends",
        Request: "New Posts (3)",
      },
      {
        Name: "Community Cares",
        Request: "New Posts (3)",
      },
    ];
    const recommendedCommunity = [
      {
        Name: "Sense of Place",
        Request: "1500 Members",
        Join: "Join",
      },
      {
        Name: "Sense of Place",
        Request: "1500 Members",
        Join: "Join",
      },
      {
        Name: "Sense of Place",
        Request: "1500 Members",
        Join: "Join",
      },
      {
        Name: "Sense of Place",
        Request: "1500 Members",
        Join: "Join",
      },
      {
        Name: "Sense of Place",
        Request: "1500 Members",
        Join: "Join",
      },
      {
        Name: "Sense of Place",
        Request: "1500 Members",
        Join: "Join",
      },
    ];
  const [mappedArray, setMappedArray] = useState(communityArray);
  const [color, setColor] = useState(null);
  return (
    <CommunityLayout>
      <div className="community__card">
        <Wrapper>
          <main>
            <h1
              onClick={() => {
                setMappedArray(communityArray);
              }}
            >
              My Communities
            </h1>
            <h1
              className=""
              onClick={() => {
                setMappedArray(joinedCommunity);
              }}
            >
              Joined Communities
            </h1>
            <h1
              className=""
              onClick={() => {
                setMappedArray(recommendedCommunity);
              }}
            >
              Recommended
            </h1>
          </main>
          {mappedArray.map((s) => (
            <div className="community__tab">
              <p>{s.Name}</p>
              <p>{s.Request}</p>
              {s.Join && (
                <button className="blue-btn join-btn">{s.Join}</button>
              )}
            </div>
          ))}
        </Wrapper>
      </div>
    </CommunityLayout>
  );
};

export default Communities;

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
  .community__tab {
    background-color: white;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: left;
    color: "#424d83";
    grid-gap: 6rem;
    margin: 0.7rem 0rem;
    border-radius: 5px;
    padding: 1.4rem 1.4rem;
    @media only screen and (max-width: 850px) {
      grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
      grid-gap: 0rem;
      justify-items: center;
    }
  }
  .community__tab > p {
    color: var(--clr-blue-2);
    font-size: 1.6rem;
    font-weight: 500;
  }
  .join-btn {
    padding: 0.7rem 2.4rem;
    font-size: 1.4rem;
    font-weight: 600;
    margin-top: 0rem;
    @media only screen and (max-width: 850px) {
      margin-top: 1.7rem;
    }
  }
`;