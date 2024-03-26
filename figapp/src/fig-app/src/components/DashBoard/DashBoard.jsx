import React, {useState} from "react";
import Header from "./Header";
import Boards from "./Boards";
import sampleData from "../../Data/Data";

const DashBoard = () => {
    const [data, setData] = useState(sampleData);

    return (
        <div>
            <Header />
            <Boards data={data} />
        </div>
    );
};

export default DashBoard;