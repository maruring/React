import React from "react";
import MeasureCard from './MeasureCard'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Board = (props) => {

    return(
        <Box>
            <Grid container justify="space-between">
                <Grid item>
                    <p>{props.settingPlaceName}</p>
                    {/* <MeasureCard /> */}
                </Grid>
            </Grid>
        </Box>
    );
};

export default Board;