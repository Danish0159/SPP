import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import styled from "styled-components";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import CancelIcon from "@mui/icons-material/Cancel";
import Spinner from "../../../components_en/Spinner";
import Dropzone, { useDropzone } from "react-dropzone";
import { Button, TextField } from "@mui/material";
import { styles } from "../../../Shared/Styles";
import {
  deleteProjectEn,
  updateProjectEn,
} from "../../../features_en/profile/profileSlice";
import Compress from "compress.js";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const PersonelProjects = ({ handleStep }) => {
  // Update Project start.

  const compress = new Compress();

  const [wait, setWait] = useState(false);

  const [updateId, setUpdateId] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectLocation, setProjectLocation] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [images, setImages] = useState([]);

  const removeImages = () => {
    setImages([]);
  };

  const { isDragActive, isDragAccept, isDragReject } = useDropzone();
  const style = React.useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  // Update project end.

  // Take Review.
  const [review, setReview] = useState(false);
  const [projectReviewId, setProjectReviewId] = useState(false);
  // Take Review end.

  const { user, isLoading } = useSelector((state) => state.profileEn);
  const dispatch = useDispatch();

  // Delete Project.
  function handleDelete(projectId) {
    dispatch(
      deleteProjectEn({
        profileId: user.profile._id,
        projectId,
      })
    );
  }

  // Necessary Updates
  function handleProjectUpdate(projectId) {
    const project = user.profile.portfolio.find(
      (project) => project._id === projectId
    );
    setProjectName(project.projectName);
    setProjectLocation(project.projectLocation);
    setProjectDescription(project.projectDescription);
    setImages(project.images);
    setUpdateId(projectId);
  }

  // Update Project
  function handleProjectSubmit(e) {
    e.preventDefault();
    //  API CALL.
    dispatch(
      updateProjectEn({
        projectName,
        projectLocation,
        projectDescription,
        images,
        profileId: user.profile._id,
        projectId: updateId,
      })
    );
    // Reset form.
    setProjectName("");
    setProjectLocation("");
    setProjectDescription("");
    setImages([]);
    setUpdateId(false);
  }
  if (isLoading) {
    return <Spinner />;
  }
  if (review) {
    return (
      <Wrapper>
        <div className="edit__div">
          <CancelIcon
            onClick={() => {
              setReview(false);
            }}
            className="edit__icon"
          ></CancelIcon>
        </div>
        <div>
          <h1 className="request__title">Request a client testimonial</h1>
          <p className="card__subtitle">
            Send the review page link to the client to take a review for this
            project just by clicking on the below button to automatically copy
            the link.
          </p>
          <button
            onClick={() => {
              toast.success("Copied to clipboard", {
                position: "top-center",
                autoClose: 300,
                hideProgressBar: true,
              });
              navigator.clipboard.writeText(
                `mahntysa.netlify.app/Review/${user.profile._id}/${projectReviewId}`
              );
            }}
            className="request__link"
          >
            Click To Copy
          </button>
        </div>
      </Wrapper>
    );
  }
  if (updateId) {
    return (
      <Wrapper>
        <div className="edit__div">
          <CancelIcon
            onClick={() => {
              setUpdateId(false);
            }}
            className="edit__icon"
          ></CancelIcon>
        </div>

        <form onSubmit={handleProjectSubmit}>
          <p className="card__subtitle">Project Name</p>
          <TextField
            fullWidth
            type="text"
            name="text"
            inputProps={{
              style: styles.textField,
              maxLength: 50,
            }}
            helperText={
              <small className="helper">
                {projectName.length}/{50}
              </small>
            }
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
          <p className="card__subtitle">Project Location</p>
          <TextField
            fullWidth
            type="text"
            name="text"
            inputProps={{
              style: styles.textField,
              maxLength: 30,
            }}
            helperText={
              <small className="helper">
                {projectLocation.length}/{30}
              </small>
            }
            value={projectLocation}
            onChange={(e) => setProjectLocation(e.target.value)}
            required
          />
          <p className="card__subtitle">Project Description</p>
          <TextField
            fullWidth
            type="text"
            name="text"
            inputProps={{
              style: styles.desciption,
              maxLength: 200,
            }}
            helperText={
              <small className="helper">
                {projectDescription.length}/{200}
              </small>
            }
            rows={3}
            multiline
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            required
          />
          <p className="card__subtitle">Project Files</p>
          <div className="form-group">
            <Dropzone
              onDrop={(acceptedFiles) => {
                setWait(true);
                compress
                  .compress(acceptedFiles, {
                    size: 1,
                    quality: 0.7,
                    maxHeight: 1080,
                    maxWidth: 1080,
                  })
                  .then((data) => {
                    data.map((image) => {
                      const base64str = image.data;
                      const imgExt = image.ext;
                      const file = Compress.convertBase64ToFile(
                        base64str,
                        imgExt
                      );

                      const formData = new FormData();

                      formData.append("file", file);
                      formData.append("upload_preset", "huarluoc");
                      formData.append("api_key", "642495779825247");

                      axios
                        .post(
                          "https://api.cloudinary.com/v1_1/dm1mlee94/image/upload",
                          formData
                        )
                        .then((Response) => {
                          setImages((images) => [
                            ...images,
                            Response.data.secure_url,
                          ]);
                        });

                      return null;
                    });
                  });
              }}
              accept="image/*"
              name="heroImage"
              maxFiles={6}
              multiple={true}
              maxSize={10 * 1024 * 1024}
            >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps({ className: "dropzone", style })}>
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <p className="drop">Drop the files here ...</p>
                  ) : (
                    <p className="drop">
                      Drag 'n' Drop Only Image Files Here, or Click to Select
                      Files
                      <br />
                      (Min 1 Image file and Max 6 Image Files)
                    </p>
                  )}
                </div>
              )}
            </Dropzone>
            {images.length > 0 && (
              <aside className="thumbsContainer">
                {images.map((image, index) => {
                  return (
                    <div className="thumb" key={index}>
                      <div className="thumbInner">
                        <img alt="selected" src={image} className="img" />
                      </div>
                    </div>
                  );
                })}
              </aside>
            )}

            {wait && (
              <aside
                className="thumbsContainer"
                style={{ display: images.length > 0 ? "none" : "block" }}
              >
                <div style={{ textAlign: "center", width: "100%" }}>
                  <CircularProgress style={{ height: "5rem", width: "5rem" }} />
                </div>
              </aside>
            )}

            {images.length > 0 && (
              <Button
                sx={styles.removeBtn}
                type="button"
                onClick={removeImages}
              >
                Remove Images
              </Button>
            )}

            <button
              style={
                images.length > 0
                  ? { marginTop: "3rem" }
                  : {
                      marginTop: "3rem",
                      backgroundColor: "whitesmoke",
                      color: "lightgrey",
                      cursor: "not-allowed",
                    }
              }
              className="blue-btn card-btn"
              type="submit"
              disabled={images.length > 0 ? false : true}
            >
              UPDATE PROJECT
            </button>
          </div>
        </form>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <h2 className="profile__portfolio">Portfolio</h2>
        {user.profile.portfolio.map((project, index) => {
          return (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={
                  <>
                    {!project.review && (
                      <p
                        onClick={() => {
                          setReview(true);
                          setProjectReviewId(project._id);
                        }}
                        className="icons"
                      >
                        Review
                      </p>
                    )}
                    <ModeEditOutlineOutlinedIcon
                      onClick={() => handleProjectUpdate(project._id)}
                      className="icons"
                    />
                    <DeleteIcon
                      onClick={() => {
                        handleDelete(project._id);
                      }}
                      className="icons"
                    />
                  </>
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="profile__title">{project.projectName}</p>
              </AccordionSummary>
              <AccordionDetails>
                <div className="preview__portfolio">
                  <p className="profile__title">Project Name</p>
                  <p className="profile__subtitle">{project.projectName}</p>
                  <p className="profile__title">Project Location</p>
                  <p className="profile__subtitle">{project.projectLocation}</p>
                  <p className="profile__title">Project Description</p>
                  <p className="profile__subtitle">
                    {project.projectDescription}
                  </p>
                  <aside className="thumbsContainer">
                    {project.images.map((img, index) => {
                      return (
                        <div key={index} className="thumb">
                          <div className="thumbInner">
                            <img alt="selected" src={img} className="img" />
                          </div>
                        </div>
                      );
                    })}
                  </aside>
                </div>
              </AccordionDetails>
            </Accordion>
          );
        })}

        <div className="profile__addproject">
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "2rem",
            }}
            className="blue-btn card-btn"
            onClick={() => handleStep(3)}
          >
            Add Project <AddOutlinedIcon fontSize="large" />
          </button>
        </div>
      </Wrapper>
    );
  }
};

export default PersonelProjects;

const Wrapper = styled.div`
  .edit__div {
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    padding-bottom: 0px;
    justify-content: flex-end;
  }

  .edit__icon {
    color: #656565;
    font-size: 35px;
    border: 1px solid #656565;
    border-radius: 50px;
    margin: 0.4rem 0rem;
    padding: 6px;
    cursor: pointer;
  }

  .icons {
    font-size: 20px;
    margin-right: 8px;
    align: center;
  }

  .request__title {
    font-size: 2.7rem;
  }

  .request__link {
    background-color: #424d83;
    color: rgb(255, 255, 255);
    border: none;
    font-size: 1.3rem;
    padding: 1rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 2rem;
  }

  .profile__addproject {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
  textAlign: "center",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};
