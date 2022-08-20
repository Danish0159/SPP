import React from "react";
import { at } from "lodash";
import { useField } from "formik";
import { TextField } from "@mui/material";
import { styles } from "../../../Shared/styles";

export default function InputField(props) {

  const { errorText, type, ...rest } = props;
  const [field, meta] = useField(props);

  function _renderHelperText() {
    const [touched, error] = at(meta, "touched", "error");
    if (touched && error) {
      return <p className="error-p">{error}</p>;
    }
  }

  return (
    <>
      <TextField
        inputProps={{ style: styles.textField, min: props.min, maxLength: props.limit
        }}
        type={type}
        error={meta.touched && meta.error && true}
        {...field}
        {...rest}
      />
      {_renderHelperText()}
    </>
  );
}