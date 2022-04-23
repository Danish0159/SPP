import React, { useEffect, useState } from "react";
import { InputField } from "../../components/ProfileCreation/FormFields";
import { useField } from "formik";
import Dropzone, { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import { Button } from "@mui/material";

export default function Portfolio(props) {
  const {
    // (Field Array) for projectName1, prjectName2.
    formField: {
      // projectName,
      projectName1,
      projectLocation1,
      multiFiles,
      projectName2,
      projectLocation2,
      projectName3,
      projectLocation3,
      projectName4,
      projectLocation4,
      projectName5,
      projectLocation5,
    },
  } = props;

  // State Variables.
  // For Thumbs.
  // const [files, setFiles] = useState([]);
  // For updating initial state.
  const [src1, setSrc1] = useState([]);
  const [src2, setSrc2] = useState([]);
  const [src3, setSrc3] = useState([]);
  const [src4, setSrc4] = useState([]);
  const [src5, setSrc5] = useState([]);
  const [heroFiles1, setHeroFiles1] = useState([]);
  const [heroFiles2, setHeroFiles2] = useState([]);
  const [heroFiles3, setHeroFiles3] = useState([]);
  const [heroFiles4, setHeroFiles4] = useState([]);
  const [heroFiles5, setHeroFiles5] = useState([]);

  // Use Some Efficient Solution for removing.
  const remove1 = () => {
    setHeroFiles1([]);
    setSrc1([]);
  };

  const remove2 = () => {
    setHeroFiles2([]);
    setSrc2([]);
  };

  const remove3 = () => {
    setHeroFiles3([]);
    setSrc3([]);
  };

  const remove4 = () => {
    setHeroFiles4([]);
    setSrc4([]);
  };

  const remove5 = () => {
    setHeroFiles5([]);
    setSrc5([]);
  };

  // Testing State.
  const [state, setState] = useState([
    {
      projectName: projectName1,
      projectLocation: projectLocation1,
      setHeroFiles: setHeroFiles1,
      setSrc: setSrc1,
      remove: remove1,
    },
    {
      projectName: projectName2,
      projectLocation: projectLocation2,
      setHeroFiles: setHeroFiles2,
      setSrc: setSrc2,
      remove: remove2,
    },
    {
      projectName: projectName3,
      projectLocation: projectLocation3,
      setHeroFiles: setHeroFiles3,
      setSrc: setSrc3,
      remove: remove3,
    },
    {
      projectName: projectName4,
      projectLocation: projectLocation4,
      setHeroFiles: setHeroFiles4,
      setSrc: setSrc4,
      remove: remove4,
    },
    {
      projectName: projectName5,
      projectLocation: projectLocation5,
      setHeroFiles: setHeroFiles5,
      setSrc: setSrc5,
      remove: remove5,
    },
  ]);

  // Formik helpers.
  const [field, meta, helper] = useField(multiFiles.name);
  const { touched, error } = meta;
  const { setValue } = helper;
  const isError = touched && error && true;
  const { value } = field;
  // Use Dropzone Hook.
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

  // Thumbs.
  const thumbs1 = heroFiles1.map((file) => (
    <div className="thumb" key={file.name}>
      <div className="thumbInner">
        <img alt="selected" src={file.preview} className="img" />
      </div>
    </div>
  ));

  const thumbs2 = heroFiles2.map((file) => (
    <div className="thumb" key={file.name}>
      <div className="thumbInner">
        <img alt="selected" src={file.preview} className="img" />
      </div>
    </div>
  ));

  const thumbs3 = heroFiles3.map((file) => (
    <div className="thumb" key={file.name}>
      <div className="thumbInner">
        <img alt="selected" src={file.preview} className="img" />
      </div>
    </div>
  ));

  const thumbs4 = heroFiles4.map((file) => (
    <div className="thumb" key={file.name}>
      <div className="thumbInner">
        <img alt="selected" src={file.preview} className="img" />
      </div>
    </div>
  ));

  const thumbs5 = heroFiles5.map((file) => (
    <div className="thumb" key={file.name}>
      <div className="thumbInner">
        <img alt="selected" src={file.preview} className="img" />
      </div>
    </div>
  ));

  // Toast.
  useEffect(() => {
    toast.info("Upload Your Top 5 Projects.!", {
      position: "top-right",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, []);

  // Update the initial state.
  useEffect(() => {
    if (src1 || src2 || src3 || src4 || src5) {
      setValue({ src1: src1, src2: src2, src3: src3, src4: src4, src5: src5 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src1, src2, src3, src4, src5]);

  // Memory Leaks.
  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      heroFiles1.forEach((file) => URL.revokeObjectURL(file.preview));
      heroFiles2.forEach((file) => URL.revokeObjectURL(file.preview));
      heroFiles3.forEach((file) => URL.revokeObjectURL(file.preview));
      heroFiles4.forEach((file) => URL.revokeObjectURL(file.preview));
      heroFiles5.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [heroFiles1, heroFiles2, heroFiles3, heroFiles4, heroFiles5]
  );

  return (
    <>
      {state.map((step, index) => {
        return (
          <>
            <div key={index}>
              <p className="card__subtitle">Project Name</p>
              <InputField
                // name={step.projectName`${index + 1}`.name}
                // name={step`.${index}`.name}
                name={step.projectName.name}
                type="text"
                fullWidth
              />
              <p className="card__subtitle">Location</p>
              <InputField
                // name={projectLocation1.name}
                name={step.projectLocation.name}
                type="text"
                fullWidth
              />

              <p className="card__subtitle">Project Files</p>
              <div key={index} className="form-group">
                <Dropzone
                  onDrop={(acceptedFiles) => {
                    step.setHeroFiles(
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
                        step.setSrc((src) => [...src, reader.result]);
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
                <aside className="thumbsContainer">
                  {index === 0 ? thumbs1 : null}
                  {index === 1 ? thumbs2 : null}
                  {index === 2 ? thumbs3 : null}
                  {index === 3 ? thumbs4 : null}
                  {index === 4 ? thumbs5 : null}
                </aside>
                <Button
                  // className="blue-btn card-btn imgRemove-btn"
                  id="remove-img-btn"
                  type="button"
                  onClick={step.remove}
                >
                  Remove Images
                </Button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

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