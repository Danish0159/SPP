import React from "react";
import PropTypes from "prop-types";
import { at } from "lodash";
import { useField } from "formik";
import { FormControl, Select, MenuItem } from "@mui/material";

function SelectField(props) {
  const { label, data, ...rest } = props;
  const [field, meta] = useField(props);
  const { value: selectedValue } = field;
  const [touched, error] = at(meta, "touched", "error");
  const isError = touched && error && true;
  function _renderHelperText() {
    if (isError) {
      return <p className="error-p">{error}</p>;
    }
  }

  return (
    <FormControl {...rest} error={isError}>
      <Select
        id="mui-component-select-Category"
        {...field}
        value={selectedValue ? selectedValue : ""}
      >
        {data.map((item, index) => (
          <MenuItem id="Select" key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {_renderHelperText()}
    </FormControl>
  );
}

SelectField.defaultProps = {
  data: [],
};

SelectField.propTypes = {
  data: PropTypes.array.isRequired,
};

export default SelectField;
