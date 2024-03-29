import React from "react";
import MeasureCard from './MeasureCard'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

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
            <Grid container justify="space-between">
                <Grid item>
                    <p>{props.settingPlaceName}</p>
                </Grid>
                <Grid item>
                    {MeasureCardData.map((sensorInfo, index) => {
                        return <MeasureCard deviceName={sensorInfo["deviceName"]} sensorName={sensorInfo["sensorName"]} 
                        sensorState={sensorInfo["sensorState"]} sensorType={sensorInfo["sensorType"]} sensorValue={sensorInfo["sensorValue"]}
                        key={index.toString()} />
                    })}
                </Grid>
            </Grid>
        </Box>
    );
};

export default Board;