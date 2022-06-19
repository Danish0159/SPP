import React, { useEffect, useState } from "react";
import Dropzone, { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import styled from "styled-components";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addProject, reset } from "../../../slices/auth";
import Spinner from "../../../components/Spinner";
import { styles } from '../../../styles';

const AddProject = () => {
    const [projectName, setProjectName] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [images, setImages] = useState([]);

    const removeImages = () => {
        setImages([]);
    };

    // state.
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        if (isSuccess) {
            toast.success(message);
            // history.push("/Login");
        }
        dispatch(reset());
        // eslint-disable-next-line
    }, [user, isError, isSuccess, message, dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            projectName,
            location,
            description,
            images,
            id: user.profile._id,
        })

        //  API CALL.
        dispatch(
            addProject({
                projectName,
                location,
                description,
                images,
                id: user.profile._id,
            })
        );
        // Reset form.
        setProjectName("");
        setLocation("");
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
    // thumbs.
    const thumbs = images.map((image, index) => (
        <div style={thumb} key={index}>
            <div style={thumbInner}>
                <img alt="selected" src={image} style={img} />
            </div>
        </div>
    ));
    // loading.
    if (isLoading) {
        return <Spinner />;
    }
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
                        ADD PROJECT
                    </button>
                </div>
            </form>
        </>
    )
}

export default AddProject


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