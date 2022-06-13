import React from "react";
import PropTypes from "prop-types";
import { at } from "lodash";
import { useField } from "formik";
import { FormControl, Select, MenuItem } from "@mui/material";
import { styles } from '../../../styles';

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
      <Select sx={styles.select}
        {...field}
        value={selectedValue ? selectedValue : ""}
      >
        {data && data?.map((item, index) => (
          <MenuItem sx={styles.menu} key={index} value={item.value}>
            {item.value}
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