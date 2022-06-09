import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { at } from "lodash";
import { useField } from "formik";
import { useDispatch } from "react-redux";
import { updateCountryFlag } from "../../../slices/auth";
import { FormControl, Select, MenuItem } from "@mui/material";
import { styles } from '../../../styles';

function SelectFieldLocation(props) {
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
    function updateState() {
        dispatch(updateCountryFlag(selectedValue));
    }
    // State.
    const dispatch = useDispatch();
    useEffect(() => {
        if (selectedValue === "Pakistan" || selectedValue === "Saudi Arabia") {
            updateState();
        }
    }, [selectedValue]);

    return (
        <FormControl {...rest} error={isError}>
            <Select sx={styles.select}
                {...field}
                value={selectedValue ? selectedValue : ""}
            >
                {data && data?.map((item, index) => (
                    <MenuItem sx={styles.menu} key={index} value={item.value}>
                        {item.label}
                    </MenuItem>
                ))}
            </Select>
            {_renderHelperText()}
        </FormControl>
    );
}

SelectFieldLocation.defaultProps = {
    data: [],
};

SelectFieldLocation.propTypes = {
    data: PropTypes.array.isRequired,
};

export default SelectFieldLocation;