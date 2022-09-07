import React, { useState, useEffect } from "react";
import { Field, useField } from "formik";
import { UploadField } from "../../components_en/ProfileCreation/FormFields";
import Compress from 'compress.js';
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';


const ProfilePhoto = (props) => {

  const compress = new Compress();

  const [wait, setWait] = useState(false);

  const {
    formField: { image }, setCheck
  } = props;

  // Formik Helpers.
  const [field, meta, helper] = useField(image.name);
  const { touched, error } = meta;
  const { setValue } = helper;
  const isError = touched && error && true;

  const _onChange = (e) => {
    setWait(true);

    let files = [e.target.files[0]];

    compress.compress(files, {
      size: 1,
      quality: 0.7,
      maxHeight: 1080,
      maxWidth: 1080,
    }).then((result) => {

      const base64str = result[0].data;
      const imgExt = result[0].ext;
      const file = Compress.convertBase64ToFile(base64str, imgExt);

      const formData = new FormData();

      formData.append("file", file);
      formData.append("upload_preset", "kae4qxnj");

      axios.post("https://api.cloudinary.com/v1_1/mahnty/image/upload", formData).then((Response) => {
        setValue(Response.data.secure_url);
        setWait(false);
        setCheck(false);
      })

      return null;

    });

  };

  useEffect(()=>{
    setCheck(true);
    // eslint-disable-next-line
  },[])

  return (
    <>
      <p className="card__subtitle">Please upload a professional portrait that clearly shows your face.</p>
      <div>
        <Field
          variant="outlined"
          field={field}
          component={UploadField}
          onChange={_onChange}
          isError={isError}
        />
        {isError && (
          <p className="error-p" color={"red"}>
            {error}
          </p>
        )}
        {wait && (
          <div style={{ textAlign: "center", width: "100%" }}>
            <CircularProgress style={{ height: "5rem", width: "5rem" }} />
          </div>
        )}
      </div>
    </>
  );
};

export default ProfilePhoto;