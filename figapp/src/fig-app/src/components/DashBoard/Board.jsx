import React from "react";
import MeasureCard from './MeasureCard'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const createMeasureCardData = (devicesData) => {
    let measureCardObjects = new Array();
    for (const deviceData of devicesData){
            let SensorsData = deviceData["Sensors"];
            for (const sensorData of SensorsData){
                const measureCard = new Object();
                measureCard["deviceName"] = deviceData["DeviceName"];
                measureCard["sensorName"] = sensorData["SensorName"];
                const infoObject = sensorData["info"];
                measureCard["sensorState"] = infoObject["state"];
                measureCard["sensorType"] = infoObject["type"];
                measureCard["sensorValue"] = infoObject["value"];
                measureCardObjects.push(measureCard);
            };
        };
        return measureCardObjects
    };

const Board = (props) => {
    const MeasureCardData = createMeasureCardData(props.devicesData);

    return(
        <Box>
            <Grid container justify="space-between" alignItems="center">
                <Grid item xs="auto">
                    <Card>
                        <CardContent>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {props.settingPlaceName}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {MeasureCardData.map((sensorInfo, index) => {
                                    return <MeasureCard deviceName={sensorInfo["deviceName"]} sensorName={sensorInfo["sensorName"]} 
                                    sensorState={sensorInfo["sensorState"]} sensorType={sensorInfo["sensorType"]} sensorValue={sensorInfo["sensorValue"]}
                                    key={index.toString()} />
                                })}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Board;