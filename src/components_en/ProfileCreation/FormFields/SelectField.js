import React from "react";
import { Select, MenuItem } from "@mui/material";
import { useController } from "react-hook-form";
import { styles } from "../../../Shared/Styles";

function SelectField(props) {

  const {
    field: { onChange, name, value },
    fieldState: { error }
  } = useController({
    name: props.name,
    control: props.control,
    rules: {
      required: true
    },
    defaultValue: ""
  });

  console.log("select field");

  return (
    <>
      <Select
        fullWidth
        name={name}
        value={value}
        onChange={onChange}
        style={styles.select}
        error={error && true}
      >
        {props.data && props.data.map((item, index) => (
          <MenuItem sx={styles.menu} key={index} value={item.value_en}>
            {item.value_en}
          </MenuItem>
        ))}
      </Select>
      {error && error.type === "required" ? <small className="error">Required</small> : null}
    </>
  )
};


export default SelectField;