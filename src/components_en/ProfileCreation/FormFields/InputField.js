import React from "react";
import { at } from "lodash";
import { useField } from "formik";
import { TextField } from "@mui/material";

export default function InputField(props) {

  const { errorText, type, style, min, limit, ...rest } = props;
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
        inputProps={{
          style: style, min: min, maxLength: limit
        }}
        helperText={limit && <p style={{ fontSize: "1.5rem" }}>{field.value.length}/{limit}</p>}
        type={type}
        {...field}
        {...rest}
      />
      {_renderHelperText()}
    </>
  );
}