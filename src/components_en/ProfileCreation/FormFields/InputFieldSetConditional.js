import React, { useEffect } from "react";
import { at } from "lodash";
import { useField } from "formik";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateProjectsFlag } from "../../../features_en/profile/profileSlice";
import { styles } from '../../../Shared/styles';

export default function InputFieldSetConditional(props) {
    const { errorText, type, ...rest } = props;
    const [field, meta] = useField(props);

    function _renderHelperText() {
        const [touched, error] = at(meta, "touched", "error");
        if (touched && error) {
            return <p className="error-p">{error}</p>;
        }
    }

    function updateState(value) {
        dispatch(updateProjectsFlag(value));
    }

    // State.
    const dispatch = useDispatch();

    useEffect(() => {
        if (field.value) {
            updateState(field.value);
        }
        // eslint-disable-next-line
    }, [field.value])

    return (
        <>
            <TextField
                inputProps={{ style: styles.textField, min: 1 }}
                type={type}
                error={meta.touched && meta.error && true}
                {...field}
                {...rest}
            />
            {_renderHelperText()}
        </>
    );
}