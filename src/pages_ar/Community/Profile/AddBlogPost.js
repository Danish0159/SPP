import React, { useState, useEffect } from "react";
import Dropzone, { useDropzone } from "react-dropzone";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../components_ar/Spinner";
import { styles } from '../../../Shared/Styles';
import { blogpostCreationAr, reset } from "../../../features_ar/blogpost/blogpostSlice";
import swal from 'sweetalert';
import Compress from 'compress.js';
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';

const AddBlogPost = ({ handleStep }) => {


    const compress = new Compress();

    const [wait, setWait] = useState(false);

    const [paragraph, setParagraph] = useState("");
    const [image, setImage] = useState("");

    const removeImage = () => {
        setImage("");
    };
    // state.
    const dispatch = useDispatch();

    const { user } = useSelector(
        (state) => state.profileAr
    );

    const { isLoading, isSuccess } = useSelector(
        (state) => state.blogpostAr
    );

    useEffect(() => {
        if (isSuccess) {
            swal({
                title: "تمت إضافة مشاركة مدونة",
                icon: "success",
            }).then(() => {
                dispatch(reset());
                handleStep(2);
            });
        }
        // eslint-disable-next-line
    }, [isSuccess]);


    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.disabled = true;

        const monthNames = ["كَانُون ٱلثَّانِي", "شُبَاط", "آذَار", "نَيْسَان", "أَيَّار", "حَزِيرَان",
            "تَمُّوز", "آب", "أَيْلُول", "تِشْرِين ٱلْأَوَّل", "تِشْرِين ٱلثَّانِي", "كَانُون ٱلْأَوَّل"
        ];

        const date = new Date();

        //  API CALL.

        dispatch(
            blogpostCreationAr({
                profile: user.profile._id,
                createdBy: {
                    name: user.profile.about_ar.name,
                    image: user.profile.photo
                },
                createdAt: `${date.getDate().toString()} ${monthNames[date.getMonth()]}, ${date.getFullYear().toString()}`,
                post: {
                    paragraph,
                    image
                }
            })
        );
        // Reset form.
        setParagraph("");
        setImage("");
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
    return (
        <>
            <form onSubmit={handleSubmit}>
                <p className="card__subtitle">بلوق وظيفة الرصاص</p>
                <TextField
                    fullWidth
                    multiline
                    type="text"
                    name="text"
                    inputProps={{
                        style: styles.desciption,
                        maxLength: 700
                    }}
                    helperText={<small className="helper">{paragraph.length}/{700}</small>}
                    value={paragraph}
                    onChange={(e) => setParagraph(e.target.value)}
                    required
                />
                <p className="card__subtitle">صورة مصغرة لمشاركة المدونة</p>
                <div className="form-group">
                    <Dropzone
                        onDrop={(acceptedFile) => {
                            setWait(true);
                            compress.compress(acceptedFile, {
                                size: 1,
                                quality: 0.7,
                                maxHeight: 1080,
                                maxWidth: 1080,
                            }).then((data) => {

                                const base64str = data[0].data;
                                const imgExt = data[0].ext;
                                const file = Compress.convertBase64ToFile(base64str, imgExt);

                                const formData = new FormData();

                                formData.append("file", file);
                                formData.append("upload_preset", "kae4qxnj");

                                axios.post("https://api.cloudinary.com/v1_1/mahnty/image/upload", formData).then((Response) => {
                                    setImage(Response.data.secure_url);
                                })

                                return null;

                            });
                        }}
                        accept="image/*"
                        name="heroImage"
                        maxFiles={1}
                        maxSize={10 * 1024 * 1024}

                    >
                        {({ getRootProps, getInputProps }) => (
                            <div {...getRootProps({ className: "dropzone", style })}>
                                <input {...getInputProps()} />
                                {isDragActive ? (
                                    <p className="drop">قم بإسقاط الملف هنا ...</p>
                                ) : (
                                    <p className="drop">
                                       اسحب "و" أفلت فقط ملف الصورة هنا ، أو انقر لتحديد ملف
                                        <br />
                                        (ملف صورة واحد كحد أقصى)
                                    </p>
                                )}
                            </div>
                        )}
                    </Dropzone>
                    {image !== "" &&
                        <aside className='thumbsContainer'>
                            <div className="thumb">
                                <div className="thumbInner">
                                    <img alt="selected" src={image} className="img" />
                                </div>
                            </div>
                        </aside>
                    }

                    {wait &&
                        <aside className='thumbsContainer' style={{ display: image !== "" ? "none" : "block" }}>
                            <div style={{ textAlign: "center", width: "100%" }}><CircularProgress style={{ height: "5rem", width: "5rem" }} /></div>
                        </aside>
                    }

                    {image !== "" &&
                        <Button
                            sx={styles.removeBtn}
                            type="button"
                            onClick={removeImage}
                        >
                            إزالة الصورة
                        </Button>
                    }

                    <button
                        style={image !== "" ? { marginTop: "3rem" } : { marginTop: "3rem", backgroundColor: "whitesmoke", color: "lightgrey", cursor: "not-allowed" }}
                        className="blue-btn card-btn"
                        type="submit"
                        disabled={image !== "" ? false : true}
                    >
                        إضافة منشور مدونة
                    </button>

                </div>
            </form>
        </>
    )
}

export default AddBlogPost;

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
