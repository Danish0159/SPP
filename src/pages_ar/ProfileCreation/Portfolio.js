import React, { useEffect, useState } from "react";
import { InputField } from "../../components_ar/ProfileCreation/FormFields";
import { useField } from "formik";
import Dropzone, { useDropzone } from "react-dropzone";
import { Button } from "@mui/material";
import { styles } from '../../Shared/styles';
import { useSelector } from "react-redux";

export default function Portfolio(props) {
  const { projectsFlag } = useSelector(
    (state) => state.profileAr
  );

  // Brute Force Solution (Optamize the Solution).
  const {
    formField: {
      projectName1,
      projectLocation1,
      projectDescription1,
      projectName2,
      projectLocation2,
      projectDescription2,
      projectName3,
      projectLocation3,
      projectDescription3,
      projectName4,
      projectLocation4,
      projectDescription4,
      projectName5,
      projectLocation5,
      projectDescription5,
      multiFiles,
    },
  } = props;

  const [...field] = useField(multiFiles.name);

  const [images1, setImages1] = useState(() => field[0].value.images1 ? field[0].value.images1: []);
  const [images2, setImages2] = useState(() => field[0].value.images2 ? field[0].value.images2 : []);
  const [images3, setImages3] = useState(() => field[0].value.images3 ? field[0].value.images3 : []);
  const [images4, setImages4] = useState(() => field[0].value.images4 ? field[0].value.images4 : []);
  const [images5, setImages5] = useState(() => field[0].value.images5 ? field[0].value.images5 : []);


  const remove1 = () => {
    setImages1([]);
  };

  const remove2 = () => {
    setImages2([]);
  };

  const remove3 = () => {
    setImages3([]);
  };

  const remove4 = () => {
    setImages4([]);
  };

  const remove5 = () => {
    setImages5([]);
  };

  const [state] = useState([
    {
      projectName: projectName1,
      projectLocation: projectLocation1,
      projectDescription: projectDescription1,
      setImage: setImages1,
      remove: remove1,
    },
    {
      projectName: projectName2,
      projectLocation: projectLocation2,
      projectDescription: projectDescription2,
      setImage: setImages2,
      remove: remove2,
    },
    {
      projectName: projectName3,
      projectLocation: projectLocation3,
      projectDescription: projectDescription3,
      setImage: setImages3,
      remove: remove3,
    },
    {
      projectName: projectName4,
      projectLocation: projectLocation4,
      projectDescription: projectDescription4,
      setImage: setImages4,
      remove: remove4,
    },
    {
      projectName: projectName5,
      projectLocation: projectLocation5,
      projectDescription: projectDescription5,
      setImage: setImages5,
      remove: remove5,
    },
  ]);

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
  const thumbs1 = images1.map((image, index) => (
    <div className="thumb" key={index}>
      <div className="thumbInner">
        <img alt="selected" src={image} className="img" />
      </div>
    </div>
  ));

  const thumbs2 = images2.map((image, index) => (
    <div className="thumb" key={index}>
      <div className="thumbInner">
        <img alt="selected" src={image} className="img" />
      </div>
    </div>
  ));

  const thumbs3 = images3.map((image, index) => (
    <div className="thumb" key={index}>
      <div className="thumbInner">
        <img alt="selected" src={image} className="img" />
      </div>
    </div>
  ));

  const thumbs4 = images4.map((image, index) => (
    <div className="thumb" key={index}>
      <div className="thumbInner">
        <img alt="selected" src={image} className="img" />
      </div>
    </div>
  ));

  const thumbs5 = images5.map((image, index) => (
    <div className="thumb" key={index}>
      <div className="thumbInner">
        <img alt="selected" src={image} className="img" />
      </div>
    </div>
  ));

  // Update the initial state.
  useEffect(() => {
    if (images1 || images2 || images3 || images4 || images5) {
      field[2].setValue({ images1: images1, images2: images2, images3: images3, images4: images4, images5: images5 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images1, images2, images3, images4, images5]);

  return (
    <>
      {state.slice(0, projectsFlag).map((step, index) => {
        return (
          <div key={index}>
            <p className="card__subtitle">اسم المشروع</p>
            <InputField
              name={step.projectName.name}
              type="text"
              fullWidth
              required
            />
            <p className="card__subtitle">موقع المشروع</p>
            <InputField
              name={step.projectLocation.name}
              type="text"
              fullWidth
              required
            />
            <p className="card__subtitle">وصف المشروع (اختياري)</p>
            <InputField
              inputProps={{ style: styles.desciption, }}
              name={step.projectDescription.name}
              type="text"
              rows={3}
              multiline
              fullWidth
            />
            <p className="card__subtitle">ملفات المشروع</p>
            <div className="form-group">
              <Dropzone
                onDrop={(acceptedFiles) => {
                  acceptedFiles.map((file) => {
                    let reader = new FileReader();
                    reader.readAsDataURL(file);

                    reader.onload = () => {
                      step.setImage((images) => [...images, reader.result]);
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
                      <p className="drop">Drop the files here ...</p>
                    ) : (
                      <p className="drop">
                        قم بسحب "وإفلات" ملفات الصور فقط هنا ، أو انقر لتحديد الملفات <br />{" "}
                        <small className="thumbPadding">
                          {" "}
                          (الحد الأقصى لحجم الملف المسموح به لكل ملف هو 10 ميغا بايت)
                        </small>
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
                sx={styles.removeBtn}
                type="button"
                onClick={step.remove}
              >
                إزالة الصور
              </Button>
            </div>
          </div>
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