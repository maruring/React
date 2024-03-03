import React from "react";
import { useState, useEffect } from "react";

const ToggleButton = () =>{
    const [open, setOpen] = useState(true);
    const toggle = () => {
        setOpen(prevState => !prevState)
    };

    useEffect(() => {
        console.log("current state is", open)
        if(open){
            console.log("yes");
        }
        // ↓はクリーンアップ関数 -> 再レンダリングが実行される前に必ず実行される
        return () => {
            console.log("No");
        }
    })

    return(
        <button onClick={toggle}>
            {/* 三項演算子を利用 openがtrueの時にOpenを表示。falseの場合はCloseを表示 */}
            {open ? 'Open':'Close'} 
        </button>
    );
};

export default ToggleButton;