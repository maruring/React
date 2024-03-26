import React from "react";
import TextField from '@mui/material/TextField';

const TextForm = (props) => {
    const isPassword = (props.formType === 'password');

    return(
        <div>
            {isPassword ? (
                <TextField
                required
                fullWidth
                label={props.label}
                id={props.id}
                type="password"
                onChange={props.onChange}
                variant="outlined"
                />
            ) : (
                <TextField
                required
                fullWidth
                label={props.label}
                id={props.id}
                onChange={props.onChange}
                variant="outlined"
                />
            )}
        </div>
    );
};

export default TextForm;