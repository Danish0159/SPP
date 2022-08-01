import React, { useState } from "react";
import Dropzone, { useDropzone } from "react-dropzone";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../components_en/Spinner";
import { styles } from '../../../Shared/styles';
import { addProjectEn } from "../../../features/profile/profileSlice";

const AddProject = () => {
    const [projectName, setProjectName] = useState("");
    const [location, setLocation] = useState("");
    const [images, setImages] = useState([]);

    const removeImages = () => {
        setImages([]);
    };
    // state.
    const dispatch = useDispatch();
    const { user, isLoading, } = useSelector(
        (state) => state.profile
    );
    const handleSubmit = (e) => {
        e.preventDefault();
        //  API CALL.
        dispatch(
            addProjectEn({
                projectName,
                location,
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
        <div className="thumb" key={index}>
            <div className="thumbInner">
                <img alt="selected" src={image} className="img" />
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
                        ADD PROJECT
                    </button>
                </div>
            </form>
        </>
    )
}

export default AddProject

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