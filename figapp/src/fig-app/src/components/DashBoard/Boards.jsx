import React from "react";
import Board from "./Board";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Boards = (props) => {

    return(
        <Box>
            <Grid container justify="space-between">
                <Grid item>
                    {props.data.map((value, index) => {
                        return <Board settingPlaceName={value["PlaceName"]}  devicesData={value["Devices"]} key={index.toString()} />
                    })}
                </Grid>
            </Grid>
        </Box>
    );
};

export default Boards;