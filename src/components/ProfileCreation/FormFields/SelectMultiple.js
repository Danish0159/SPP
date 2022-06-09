// https://codesandbox.io/s/react-formik-material-ui-autocomplete-9wqfq?file=/src/Component.tsx
import React from "react";
import { fieldToTextField } from 'formik-material-ui'
import { Autocomplete, TextField } from "@mui/material";

function SelectMultiple({ textFieldProps, ...props }) {
    const {
        form: { setFieldValue }
    } = props
    const { error, helperText, ...field } = fieldToTextField(props)
    const { name } = field
    const isError = error && true;

    function _renderHelperText() {
        if (isError) {
            return <p className="error-p">{helperText}</p>;
        }
    }
    return (
        <>
            <Autocomplete
                {...props}
                {...field}
                id="CityField"
                onChange={(_, value) => setFieldValue(name, value)}
                getOptionSelected={(item, current) => item.value === current.value}
                renderInput={props => (
                    <TextField
                        {...props}
                        {...textFieldProps}
                        error={error}
                    />
                )}
            />
            {_renderHelperText()}
        </>
    );
}

export default SelectMultiple;