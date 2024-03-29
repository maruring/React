import React from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { createTheme, ThemeProvider } from "@mui/material";

const CardContentStyled = styled(CardContent)({
    width: 200,
    height: 50,
    background: "green",
});

const MeasureCard = (props) => {
    return(
        <Card elevation={3} >
            <CardContent>
                <p>
                {props.deviceName}
                </p>
                <p>
                    {props.sensorName}
                </p>
                <p>
                    {props.sensorType}
                </p>
                <Typography variant="h5" component="div">
                    {props.sensorState}
                </Typography>
                {props.sensorValue}
            </CardContent>
        </Card>
    );
};

export default MeasureCard;