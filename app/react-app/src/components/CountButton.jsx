import React from "react";
import { useState } from "react";

const CountButton = () => {
    const [count, setCount] = useState(0);
    const upCount = () => {
        setCount(prevState => prevState+1);
    };
    const downCount = () => {
        setCount(prevState => prevState-1);
    };

    return(
        <div>
            <p>現在のカウント: {count}</p>
            <button onClick={upCount}>up</button>
            <button onClick={downCount}>down</button>
        </div>
    );
};

export default CountButton;