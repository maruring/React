import React from "react";
import Button from '@mui/material/Button';
import styled from "@emotion/styled";

const ButtonStyled = styled(Button)({
    borderColor: "#FFB549",
    color: "#FFB549",
    fontWeight: 600,
    width: "100%",
    marginBottom: "8px",
    "&:hover":{
        backgroundColor: "#FFB549",
        color: "#fff"
    }
});

const Answer = (props) => {
    return(
        <div>
            <ButtonStyled variant="outlined" onClick={() => props.select(props.content, props.nextId)}>
                {props.content}
            </ButtonStyled>
        </div>
    );
};

export default Answer;