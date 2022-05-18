import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import styled from "styled-components";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { deleteProject, updateProject, reset } from "../../../slices/auth";
import CancelIcon from '@mui/icons-material/Cancel';
import RateReviewIcon from '@mui/icons-material/RateReview';
import Spinner from "../../../components/Spinner";
import Dropzone, { useDropzone } from "react-dropzone";
import { Button, TextField } from '@mui/material';

const PersonelProjects = () => {
    /////////////////////////////
    /////////////////////////////
    // Update Project.
    const [updateId, setUpdateId] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [location, setLocation] = useState("");
    const [images, setImages] = useState([]);

    const removeImages = () => {
        setImages([]);
    };

    const { isDragActive, isDragAccept, isDragReject } = useDropzone();
    // Styles.
    const style = React.useMemo(
        () => ({
            ...baseStyle,
            ...(isDragActive ? activeStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {}),
        }),
        [isDragActive, isDragReject, isDragAccept]
    );
    // thumbs.
    const thumbs = images.map((image, index) => (
        <div style={thumb} key={index}>
            <div style={thumbInner}>
                <img alt="selected" src={image} style={img} />
            </div>
        </div>
    ));
    // Update project end.
    /////////////////////////////
    /////////////////////////////

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    // state.
    const dispatch = useDispatch();
    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        if (isSuccess) {
            toast.success(message);
        }
        dispatch(reset());
        // eslint-disable-next-line
    }, [user, isError, isSuccess, message, dispatch]);

    function handleDelete(projectId) {
        //  API CALL.
        dispatch(
            deleteProject({
                profileId: user.profile._id,
                projectId,
            })
        );
    }

    function handleProjectUpdate(projectId) {
        const project = user.profile.portfolio.find((project) => project._id === projectId);
        setProjectName(project.projectName);
        setLocation(project.location);
        setImages(project.images);
        setUpdateId(projectId);
    }

    function handleProjectSubmit(e) {
        e.preventDefault();
        //  API CALL.
        console.log({
            projectName,
            location,
            images,
            profileId: user.profile._id,
            projectId: updateId,
        })
        dispatch(
            updateProject({
                projectName,
                location,
                images,
                profileId: user.profile._id,
                projectId: updateId,
            })
        );
        // Reset form.
        setProjectName("");
        setLocation("");
        setImages([]);
        setUpdateId(false);
    }

    // Loading.
    if (isLoading) {
        return <Spinner />;
    }
    // Update Project
    if (updateId) {
        return (
            <Wrapper>
                <div className='edit__div'>
                    <CancelIcon onClick={() => { setUpdateId(false) }} className="edit__icon"></CancelIcon>
                </div>

                <form onSubmit={handleProjectSubmit}>
                    <p className="card__subtitle">Project Name</p>
                    <TextField
                        fullWidth
                        type="text"
                        name="text"
                        id="Input"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        required
                    />
                    <p className="card__subtitle">Location</p>
                    <TextField
                        fullWidth
                        type="text"
                        name="text"
                        id="Input"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                    <p className="card__subtitle">Project Files</p>
                    <div className="form-group">
                        <Dropzone
                            onDrop={(acceptedFiles) => {
                                // Read files and update src state.
                                acceptedFiles.map((file) => {
                                    let reader = new FileReader();
                                    reader.readAsDataURL(file);

                                    reader.onload = () => {
                                        setImages((images) => [...images, reader.result]);
                                    };

                                    reader.onerror = function () {
                                        alert(reader.error);
                                    };
                                });
                            }}
                            accept="image/*"
                            name="heroImage"
                            multiple={true}
                            maxFiles={6}
                            maxSize={10 * 1024 * 1024}
                        >
                            {({ getRootProps, getInputProps }) => (
                                <div {...getRootProps({ className: "dropzone", style })}>
                                    <input {...getInputProps()} />
                                    {isDragActive ? (
                                        <p className="drop">Drop the files here ...</p>
                                    ) : (
                                        <p className="drop">
                                            Drag 'n' drop only image files here, or click to
                                            select files <br />{" "}
                                            <p style={padding}>
                                                {" "}
                                                (6 files each of 10MB are the maximum number of
                                                files you can drop here)
                                            </p>
                                        </p>
                                    )}
                                </div>
                            )}
                        </Dropzone>
                        <aside style={thumbsContainer}>
                            {thumbs}
                        </aside>
                        {images.length > 0 &&
                            <Button
                                id="remove-img-btn"
                                type="button"
                                onClick={removeImages}
                            >
                                Remove Images
                            </Button>
                        }
                        <button
                            style={{ marginTop: '2rem' }}
                            className="blue-btn card-btn"
                            type="submit"
                        >
                            UPDATE
                        </button>
                    </div>
                </form>
            </Wrapper>
        )
    }
    else {
        return (
            <main>
                <h2 className='preview__title'>Portfolio</h2>
                {user.profile.portfolio.map((project, index) => {
                    return (
                        <Accordion key={index}>
                            <AccordionSummary
                                expandIcon={
                                    <>
                                        {/* <ExpandMoreIcon style={{ fontSize: 20, marginRight: "8px" }} /> */}
                                        <RateReviewIcon style={{ fontSize: 20, marginRight: "8px", }}></RateReviewIcon>
                                        <ModeEditOutlineOutlinedIcon onClick={() => {
                                            handleProjectUpdate(project._id);
                                        }} style={{ fontSize: 20, marginRight: "8px", }} />
                                        <DeleteIcon onClick={() => { handleDelete(project._id) }} style={{ fontSize: 20, marginRight: "8px", color: "#ff8080" }} />
                                    </>
                                }
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <p className="personel__title">{project.projectName}</p>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="preview__portfolio">
                                    <p className="personel__title">Project Name</p>
                                    <p className="personel__subtitle">{project.projectName}</p>
                                    <p className="personel__title">Project Location</p>
                                    <p className="personel__subtitle">{project.location}</p>
                                    <aside className='thumbsContainer'>
                                        {
                                            project.images.map((img, index) => {
                                                return (
                                                    <div key={index} className='thumb'>
                                                        <div className='thumbInner'>
                                                            <img alt="selected" src={img} className='img' />
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </aside>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    )
                })}
            </main >
        )
    }
}

export default PersonelProjects

const Wrapper = styled.div`
.edit__div{
    display:flex;
    align-items:center;
    margin-bottom:7px;
    padding-bottom:0px;
    justify-content:flex-end;
}
.edit__icon{
    color: #656565;
    font-size: 35px;
    border: 1px solid #656565;
    border-radius:50px;
    margin: .4rem 0rem;
    padding: 6px;
    cursor: pointer;
}
`;
// const Wrapper1 = styled.div`
//  >*{
//      border: 2px solid blue;
//  }
//  `;

///////////////////////////
// Css Styling.
const thumbsContainer = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
};

const thumb = {
    display: "inline-flex",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: "border-box",
};

const thumbInner = {
    display: "flex",
    minWidth: 0,
    overflow: "hidden",
};

const img = {
    display: "block",
    width: "auto",
    height: "100%",
};

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

const padding = {
    padding: "10px 0px",
};