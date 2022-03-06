import React, { useEffect, useState } from "react";
import { InputField } from "../../components/Registration";
import { useDropzone } from "react-dropzone";
import { Field, useField } from "formik";

export default function Portfolio(props) {
  const {
    formField: { projectName, projectLocation, multiFiles },
  } = props;

  // State Variables.
  const [files, setFiles] = useState([]);
  const [src, setSrc] = useState([]);

  // Formik helpers
  const [field, meta, helper] = useField(multiFiles.name);
  const { touched, error } = meta;
  const { setValue } = helper;
  const isError = touched && error && true;
  const { value } = field;

  // Use Dropzone Hook.
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      console.log("accepted", acceptedFiles);
      // For Blob. (For displaying images on UI. (Using Blob))
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );

      // Read files and update src state.
      acceptedFiles.map((file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
          setSrc((src) => [...src, reader.result]);
        };

        reader.onerror = function () {
          alert(reader.error);
        };
      });
    },
  });

  const style = React.useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img alt="selected" src={file.preview} style={img} />
      </div>
    </div>
  ));

  // Update the initial state.
  useEffect(() => {
    if (src) {
      setValue({ src: src });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <>
      <p className="card__subtitle">Project Name</p>
      <InputField
        name={projectName.name}
        type="text"
        // label={experience.label}
        fullWidth
      />
      <p className="card__subtitle">Location</p>
      <InputField
        name={projectLocation.name}
        type="text"
        // label={projects.label}
        fullWidth
      />

      <p className="card__subtitle">Project Files</p>
      <div className="form-group">
        <section className="container">
          <div {...getRootProps({ className: "dropzone", style })}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="drop">Drop the files here ...</p>
            ) : (
              <p className="drop">
                Drag 'n' drop only image files here, or click to select files
              </p>
            )}
          </div>
          <aside style={thumbsContainer}>{thumbs}</aside>
          {/* {src ? (
              <>
                <h1>{src[0]}</h1>
                <h1>{src[1]}</h1>
                <h1>{src[2]}</h1>
              </>
            ) : (
              ""
            )} */}
        </section>
      </div>
    </>
  );
}

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
