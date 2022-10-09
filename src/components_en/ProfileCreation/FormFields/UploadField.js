import React, { useRef } from "react";
import styled from "styled-components";
import { Button, Avatar } from "@mui/material";
import { useController } from "react-hook-form";
import Compress from 'compress.js';
import axios from "axios";
import { styles } from "../../../Shared/Styles";

function UploadField(props) {

  const {
    field: { onChange, name, value },
    fieldState: { error }
  } = useController({
    name: props.name,
    control: props.control,
    rules: {
      required: true
    },
    defaultValue: "",
  });

  const compress = new Compress();

  const files = useRef();

  const onUpload = (e) => {

    props.setWait(true);

    compress.compress(files.current, {
      size: 1,
      quality: 0.7,
      maxHeight: 1080,
      maxWidth: 1080,
    }).then((result) => {

      const base64str = result[0].data;
      const imgExt = result[0].ext;
      const fileToUpload = Compress.convertBase64ToFile(base64str, imgExt);

      const formData = new FormData();

      formData.append("file", fileToUpload);
      formData.append("upload_preset", "kae4qxnj");

      axios.post("https://api.cloudinary.com/v1_1/mahnty/image/upload", formData).then((Response) => {
        onChange(Response.data.secure_url);
        props.setWait(false);
        props.setCheck(false);
      })

      return null;

    });

  };

  console.log("upload field");

  return (
    <Wrapper>
      <Avatar
        src={value}
        sx={{ width: 150, height: 150 }}
        alt="Avatar"
      />
      <div className="btns">
        <Button
          component="label"
          variant="contained"
          color={error ? "error" : "primary"}
          name={name}
          value={value}
          onChange={(e) => {
            files.current = [e.target.files[0]];
            onChange(URL.createObjectURL(e.target.files[0]));
          }}
          style={styles.uploadBtn}
        >
          {value === "" ? "Select Image" : "Change Image"}
          <input
            type="file"
            accept="image/*"
            max={1}
            hidden
          />
        </Button>
        <Button
          variant="contained"
          color={error ? "error" : "primary"}
          onClick={onUpload}
          style={styles.uploadBtn}
        >
          Upload Image
        </Button>
        {error && error.type === "required" ? <small className="error">Required</small> : null}
      </div>
    </Wrapper>
  );
};

export default UploadField;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

`;