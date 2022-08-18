import React, { useState } from "react";
import Dropzone, { useDropzone } from "react-dropzone";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../components_ar/Spinner";
import { styles } from '../../../Shared/styles';
import { addProjectAr } from "../../../features_ar/profile/profileSlice";

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
        (state) => state.profileAr
    );
    const handleSubmit = (e) => {
        e.preventDefault();
        //  API CALL.
        dispatch(
            addProjectAr({
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
                        إضافة مشروع
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