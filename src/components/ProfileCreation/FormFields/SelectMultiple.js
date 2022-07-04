// https://codesandbox.io/s/react-formik-material-ui-autocomplete-9wqfq?file=/src/Component.tsx
import React from "react";
import { fieldToTextField } from 'formik-material-ui'
import { Autocomplete, TextField } from "@mui/material";
import { styles } from "../../../components/Shared/styles";
import styled from "styled-components";

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
                onChange={(_, value) => setFieldValue(name, value)}
                getOptionSelected={(item, current) => item.value === current.value}
                sx={{
                    '& .MuiAutocomplete-input, & .MuiInputLabel-root': {
                        fontSize: "1.8rem",
                    },
                }}
                ListboxProps={{
                    sx: { fontSize: "1.8rem" },
                }}
                renderInput={props => (
                    <Wrapper>
                        <TextField
                            {...props}
                            {...textFieldProps}
                            error={error}
                        />
                    </Wrapper>
                )}
            />
            {_renderHelperText()}
        </>
    );
}

export default SelectMultiple;

const Wrapper = styled.div`
.MuiChip-label,
 .MuiChip-labelMedium,
  .css-6od3lo-MuiChip-label{
  font-size: 1.5rem; 
  }
`