import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import styled from "styled-components";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import CancelIcon from '@mui/icons-material/Cancel';
import RateReviewIcon from '@mui/icons-material/RateReview';
import Spinner from "../../../components_ar/Spinner";
import Dropzone, { useDropzone } from "react-dropzone";
import { Button, TextField } from '@mui/material';
import { styles } from '../../../Shared/styles';
import { deleteProjectAr, updateProjectAr } from '../../../features_ar/profile/profileSlice';


const PersonelProjects = () => {
    // Update Project start.
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

    // Take Review. 
    const [review, setReview] = useState(false);
    const [projectReviewId, setProjectReviewId] = useState(false);
    // Take Review end. 

    const { user, isLoading } = useSelector(
        (state) => state.profileAr
    );
    const dispatch = useDispatch();

    // Delete Project.
    function handleDelete(projectId) {
        dispatch(
            deleteProjectAr({
                profileId: user.profile._id,
                projectId,
            })
        );
    }

    // Necessary Updates
    function handleProjectUpdate(projectId) {
        const project = user.profile.portfolio.find((project) => project._id === projectId);
        setProjectName(project.projectName);
        setLocation(project.location);
        setImages(project.images);
        setUpdateId(projectId);
    }

    // Update Project
    function handleProjectSubmit(e) {
        e.preventDefault();
        //  API CALL.
        dispatch(
            updateProjectAr({
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
                <div className='link__div'>
                    <h1 className='request__title'>طلب شهادة العميل</h1>
                    <p className="card__subtitle">أرسل رابط صفحة المراجعة إلى العميل لأخذ مراجعة لهذا المشروع بمجرد النقر على الزر أدناه لنسخ الرابط تلقائيًا.</p>
                    <button onClick={() => {
                        toast.success("نسخ إلى الحافظة", {
                            position: "top-center",
                            autoClose: 300,
                            hideProgressBar: true,
                        });
                        navigator.clipboard.writeText(`maqawalupdated.netlify.app/Reviewar/${user.profile._id}/${projectReviewId}`);
                    }} className="request__link">انقر لنسخ</button>
                
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
                    <p className="card__subtitle">اسم المشروع</p>
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
                    <p className="card__subtitle">موقع</p>
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
                    <p className="card__subtitle">ملفات المشروع</p>
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
                            maxSize={10 * 1024 * 1024}
                        >
                            {({ getRootProps, getInputProps }) => (
                                <div {...getRootProps({ className: "dropzone", style })}>
                                    <input {...getInputProps()} />
                                    {isDragActive ? (
                                        <p className="drop">قم بإسقاط الملفات هنا ...</p>
                                    ) : (
                                        <p className="drop">
                                            قم بسحب "وإفلات" ملفات الصور فقط هنا ، أو انقر لتحديد الملفات <br />{" "}
                                            <small style={padding}>
                                                {" "}
                                                (الحد الأقصى لحجم الملف المسموح به لكل ملف هو 10 ميغا بايت)
                                            </small>
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
                                إزالة الصور
                            </Button>
                        }
                        <button
                            style={{ marginTop: '2rem' }}
                            className="blue-btn card-btn"
                            type="submit"
                        >
                            تحديث
                        </button>
                    </div>
                </form>
            </Wrapper>
        )
    }
    else {
        return (
            <Wrapper>
                <h2 className='profile__portfolio'>مَلَفّ</h2>
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
                                    <p className="profile__title">اسم المشروع</p>
                                    <p className="profile__subtitle">{project.projectName}</p>
                                    <p className="profile__title">موقع المشروع</p>
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