import { Link } from "react-router-dom";
import styled from "styled-components";
import { Avatar } from "@mui/material";

const BackToProfile = ({ avatar, name, role, userId }) => {
  return (
    <Wrapper>
      <div className="backToProfile">
        <div className="backToProfile__grid">
          <div className="backToProfile__profile">
            <Avatar
              src={avatar}
              sx={{ width: 130, height: 130 }}
              alt="Avatar"
            />
            <div className="BackToProfile__content">
              <h1 className="BackToProfile--title">
                {" "}
                {name}
              </h1>

              <p className="BackToProfile-subtitle">
                {" "}
                {role}
              </p>
            </div>
          </div>
          <div className="backToProfile__btns">
            <Link to="#" type="submit" className="blue-btn backToProfile-btn disableButtonColor">
              Message Now
            </Link>

            <Link to={`/Users/${userId}`} type="submit" className="blue-btn backToProfile-btn">
              Back To Profile
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default BackToProfile;

const Wrapper = styled.section`
  width: 100%;
  .backToProfile {
  }

  .backToProfile__grid {
    padding: 3rem 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 118rem;
    margin: auto;
    width: 100%;
    @media only screen and (max-width: 800px) {
      flex-direction: column;
    }
  }

  .backToProfile__profile {
    display: flex;
    align-items: center;
    @media only screen and (max-width: 800px) {
      flex-direction: column;
      text-align: center;
    }
  }

  .backToProfile-btn {
    display: block;
    font-size: 1.8rem;
    padding: 0.9rem 2.5rem;
    margin: 2rem 0rem;
  }

  .BackToProfile__content {
    margin-left: 3rem;
    margin-right: 3rem;
    @media only screen and (max-width: 800px) {
      margin-left: 0rem;
      margin-right: 0rem;
      margin-top: 1.5rem;
    }
  }

  .BackToProfile--title {
    font-size: 2.2rem;
    color: var(--clr-black);
  }

  .BackToProfile-subtitle {
    font-size: 1.7rem;
    font-weight: 600;
    color: var(--clr-black);
    @media only screen and (max-width: 800px) {
      margin-bottom: 3rem;
    }
  }
`;
