import React, { useState, useEffect } from "react";
import { Field, useField } from "formik";
import { UploadField } from "../../components_ar/ProfileCreation/FormFields";

const ProfilePhoto = (props) => {
  const {
    formField: { image },
  } = props;

  // Formik Helpers.
  const [field, meta, helper] = useField(image.name);
  const { touched, error } = meta;
  const { setValue } = helper;
  const isError = touched && error && true;
  const { value } = field;

  // State variables.
  const [fileName, setFileName] = useState(value.name);
  const [file, setFile] = useState(value.file);
  const [src, setSrc] = useState(value.src);

  const _onChange = (e) => {
    // Read File
    let reader = new FileReader();
    let file = e.target.files[0];
    if (file) {
      reader.onloadend = () => setFileName(file.name);
      if (file.name !== fileName) {
        reader.readAsDataURL(file);
        setSrc(reader);
        setFile(file);
      }
    }
  };

  // Update the initial state.
  useEffect(() => {
    if (file && fileName && src) {
      setValue({ file: file, src: src.result, name: fileName });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, fileName, file]);


  return (
    <>
      <p className="card__subtitle">يرجى تحميل صورة احترافية تظهر وجهك بوضوح.</p>
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
      </div>
    </>
  );
};

export default ProfilePhoto;