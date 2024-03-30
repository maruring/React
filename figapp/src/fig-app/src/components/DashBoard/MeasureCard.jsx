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
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.deviceName}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.sensorName}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.sensorType}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.sensorState}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.sensorValue}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default MeasureCard;