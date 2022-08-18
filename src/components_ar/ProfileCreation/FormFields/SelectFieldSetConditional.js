import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { at } from "lodash";
import { useField } from "formik";
import { useDispatch } from "react-redux";
import { updateConditionalFlag } from "../../../features_ar/profile/profileSlice";
import { FormControl, Select, MenuItem } from "@mui/material";
import { styles } from '../../../Shared/styles';

function SelectFieldSetConditional(props) {

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
        dispatch(updateConditionalFlag(selectedValue.value_en));
    }
    // State.
    const dispatch = useDispatch();
    useEffect(() => {
        if (selectedValue) {
            updateState();
        }
    // eslint-disable-next-line
    }, [selectedValue]);

    return (
        <FormControl {...rest} error={isError}>
            <Select sx={styles.select}
                {...field}
                value={selectedValue ? selectedValue : ""}
            >
                {data && data?.map((item, index) => (
                    <MenuItem sx={styles.menu} key={index} value={item}>
                        {item.value_ar}
                    </MenuItem>
                ))}
            </Select>
            {_renderHelperText()}
        </FormControl>
    );
}

SelectFieldSetConditional.defaultProps = {
    data: [],
};

SelectFieldSetConditional.propTypes = {
    data: PropTypes.array.isRequired,
};

export default SelectFieldSetConditional;