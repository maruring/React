import React from "react";
import MeasureCard from "./MeasureCard";

const MeasureCards = (props) => {
    console.log(props.sensorsInfo);
    return(
        <div>
            {
                Object.keys(props.sensorInfo).map()
            }
                //     items.push(<MeasureCard deviceName={sensorInfo.deviceName} sensorName={sensorInfo.sensorName}
                //         sensorType={sensorInfo.sensorType} deviceState={sensorInfo.sensorState} sensorValue={sensorInfo.sensorValue} />)
                //     }
                // return {items};
        </div>
    );
};

export default MeasureCards;