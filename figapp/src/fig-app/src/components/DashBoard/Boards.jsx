import React from "react";
import Board from "./Board";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Boards = (props) => {

    return(
        <Box>
            <Grid container justify="space-between" spacing={2}>
                <Grid item xs={6}>
                    {props.data.map((value, index) => {
                        return <Board settingPlaceName={value["PlaceName"]}  devicesData={value["Devices"]} key={index.toString()} />
                    })}
                </Grid>
            </Grid>
        </Box>
    );
};

export default Boards;