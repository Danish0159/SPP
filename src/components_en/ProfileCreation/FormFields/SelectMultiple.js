// https://codesandbox.io/s/react-formik-material-ui-autocomplete-9wqfq?file=/src/Component.tsx
import React from "react";
import { useField } from 'formik'
import { Autocomplete, TextField } from "@mui/material";
import styled from "styled-components";


function SelectMultiple({data, ...props}) {
   
    const [...field] = useField(props);
    const isError = field[1].error && field[1].touched && true;


    function _renderHelperText() {
        if (isError) {
            return <p className="error-p">{field[1].error}</p>;
        }
    }

    return (
        <>
            <Autocomplete
                options={data}
                value={field[0].value}
                sx={{
                    '& .MuiAutocomplete-input, & .MuiInputLabel-root': {
                        fontSize: "1.8rem",
                    },
                }}
                ListboxProps={{
                    sx: { fontSize: "1.8rem" },
                }}
                onChange={(event,item) => field[2].setValue(item, true) }
                getOptionLabel={(option) => option.value_en }
                multiple
                renderInput={props => (
                    <Wrapper>
                        <TextField
                        {...props}
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