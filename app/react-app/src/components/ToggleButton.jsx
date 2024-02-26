import React from "react";
import { useState } from "react";

const ToggleButton = () =>{
    const [open, setOpen] = useState(true);
    const toggle = () => {
        setOpen(prevState => !prevState)
    };

    return(
        <button onClick={toggle}>
            {/* 三項演算子を利用 openがtrueの時にOpenを表示。falseの場合はCloseを表示 */}
            {open ? 'Open':'Close'} 
        </button>
    );
};

export default ToggleButton;