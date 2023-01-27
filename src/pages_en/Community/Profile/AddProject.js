import React, { useState, useEffect } from "react";
import Dropzone, { useDropzone } from "react-dropzone";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../components_en/Spinner";
import { styles } from "../../../Shared/Styles";
import { addProjectEn, reset } from "../../../features_en/profile/profileSlice";
import swal from "sweetalert";
import Compress from "compress.js";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import styled from "styled-components";

const AddProject = ({ handleStep }) => {
  const compress = new Compress();

  const [wait, setWait] = useState(false);

  const [projectName, setProjectName] = useState("");
  const [projectLocation, setProjectLocation] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [images, setImages] = useState([]);

  const removeImages = () => {
    setImages([]);
  };
  // state.
  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, projectsFlag } = useSelector(
    (state) => state.profileEn
  );

  useEffect(() => {
    if (isSuccess) {
      swal({
        title: "Project Added",
        icon: "success",
      }).then(() => {
        dispatch(reset());
        handleStep(1);
      });
    }
    // eslint-disable-next-line
  }, [isSuccess]);

  const handleSubmit = (e) => {
    e.target.disabled = true;

    //  API CALL.
    dispatch(
      addProjectEn({
        projectName,
        projectLocation,
        projectDescription,
        images,
        id: user.profile._id,
      })
    );
    // Reset form.
    setProjectName("");
    setProjectLocation("");
    setProjectDescription("");
    setImages([]);
  };

  const { isDragActive, isDragAccept, isDragReject } = useDropzone();
  // Styles
  const style = React.useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  // loading.
  if (isLoading) {
    return <Spinner />;
  }

  if (projectsFlag >= 0 && projectsFlag < 10) {
    return (
      <>
        <form onSubmit={handleSubmit}>
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
              ADD PROJECT
            </button>
          </div>
        </form>
      </>
    );
  }

  return (
    <Wrapper>
      <h1>Your Projects Addition Limit Is Full ...</h1>
      <p>To add more projects , You have to subscribe for a paid plan</p>
    </Wrapper>
  );
};

export default AddProject;

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
