import React from "react";
import Button from '@mui/material/Button';

const Answer = (props) => {
    return(
        <div>
            <Button variant="contained">
                {props.content}
            </Button>
        </div>
    );
};

export default Answer;