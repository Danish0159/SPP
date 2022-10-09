import React from "react";
import { TextField } from "@mui/material";
import { useController } from "react-hook-form";

function InputField(props) {

  const {
    field: { onChange, name, value },
    fieldState: { error }
  } = useController({
    name: props.name,
    control: props.control,
    rules: {
      required: true,
      pattern: props.pattern,
      min: props.min,
      minLength: props.minLength
    },
    defaultValue: "",
  });

  console.log("input field");

  return (
    <>
      <TextField
        fullWidth
        multiline={props.multiline}
        rows={props.rows}
        name={name}
        type={props.type}
        value={value}
        onChange={onChange}
        inputProps={{
          maxLength: props.limit,
          style: props.style
        }}
        helperText={props.limit && <small className="helper">{value.length}/{props.limit}</small>}
        error={(error) && (error.type === "required" || error.type === "pattern" || error.type === "min") && true}
        focused={error && error.type === "minLength" && true}
      />
      {error && error.type === "required" ? <small className="error">مطلوب</small> : null}
      {error && error.type === "pattern" ? <small className="error">يسمح فقط بالأرقام</small> : null}
      {error && error.type === "min" ? <small className="error">الحد الأدنى للقيمة 0 مسموح به</small> : null}
      {error && error.type === "minLength" ? <small className="info">يجب أن يكون عدد الأرقام {props.minLength} بالضبط</small> : null}
    </>
  )
};

export default InputField;
