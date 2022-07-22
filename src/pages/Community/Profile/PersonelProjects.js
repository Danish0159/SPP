import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import styled from "styled-components";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
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
import { styles } from '../../../components/Shared/styles';

const PersonelProjects = () => {
    // Update Project.
    const [updateId, setUpdateId] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [location, setLocation] = useState("");
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
    const thumbs = images.map((image, index) => (
        <div className="thumb" key={index}>
            <div className="thumbInner">
                <img alt="selected" src={image} className="img" />
            </div>
        </div>
    ));
    // Update project end.


    /////////////////////////////
    // Take Review. 
    const [review, setReview] = useState(false);
    const [projectReviewId, setProjectReviewId] = useState(false);
    /////////////////////////////
    // Take Review end. 

    // state.
    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );
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

    /////////////////////////////
    // Delete Project.
    function handleDelete(projectId) {
        //Before API Call.
        dispatch(
            deleteProject({
                profileId: user.profile._id,
                projectId,
            })
        );
    }
    /////////////////////////////
    // Necessary Updates
    function handleProjectUpdate(projectId) {
        const project = user.profile.portfolio.find((project) => project._id === projectId);
        setProjectName(project.projectName);
        setLocation(project.location);
        setImages(project.images);
        setUpdateId(projectId);
    }

    /////////////////////////////
    // Update Project
    function handleProjectSubmit(e) {
        e.preventDefault();
        //  API CALL.
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
    if (isLoading) {
        return <Spinner />;
    }
    if (review) {
        return (
            <Wrapper>
                <div className='edit__div'>
                    <CancelIcon onClick={() => { setReview(false) }} className="edit__icon"></CancelIcon>
                </div>
                <div>
                    <h1 className='request__title'>Request a client testimonial</h1>
                    <p className="card__subtitle">You can send the following link to the client to take a review for your project.</p>
                    <button onClick={() => {
                        toast.success("Copied to clipboard", {
                            position: "top-center",
                            autoClose: 300,
                            hideProgressBar: true,
                        });
                        navigator.clipboard.writeText(`Maqawal.com/Review/${user.profile._id}/${projectReviewId}`);
                    }} className="request__link">Maqawal.com/Review/{user.profile._id}{projectReviewId}</button>
                </div>
            </Wrapper>
        )
    }
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
                        inputProps={{
                            style: styles.textField,
                        }}
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        required
                    />
                    <p className="card__subtitle">Location</p>
                    <TextField
                        fullWidth
                        type="text"
                        name="text"
                        inputProps={{
                            style: styles.textField,
                        }}
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

                                    return null;
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
                        <aside className='thumbsContainer'>
                            {thumbs}
                        </aside>
                        {images.length > 0 &&
                            <Button
                                sx={styles.removeBtn}
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
            <Wrapper>
                <h2 className='profile__portfolio'>Portfolio</h2>
                {user.profile.portfolio.map((project, index) => {
                    return (
                        <Accordion key={index}>
                            <AccordionSummary
                                expandIcon={
                                    <>
                                        <RateReviewIcon onClick={() => {
                                            setReview(true);
                                            setProjectReviewId(project._id);
                                        }} className="icons"></RateReviewIcon>
                                        <ModeEditOutlineOutlinedIcon onClick={() => handleProjectUpdate(project._id)} className="icons" />
                                        <DeleteIcon onClick={() => { handleDelete(project._id) }} className="icons" />
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
                                    <p className="profile__subtitle">{project.location}</p>
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
            </Wrapper>
        )
    }
}

export default PersonelProjects

const Wrapper = styled.div`
.edit__div {
    display:flex;
    align-items:center;
    margin-bottom:7px;
    padding-bottom:0px;
    justify-content:flex-end;
}
.edit__icon {
    color: #656565;
    font-size: 35px;
    border: 1px solid #656565;
    border-radius:50px;
    margin: .4rem 0rem;
    padding: 6px;
    cursor: pointer;
}
.icons {
    font-size: 20px;
    margin-right: 8px;
}
.request__title {
    font-size: 2.7rem;
}
.request__link {
    background-color:#424d83;
    color: rgb(255, 255, 255);;
    border: none;
    font-size: 1.3rem;
    padding: 1rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 2rem;
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

const padding = {
    padding: "10px 0px",
};