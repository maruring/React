import React from "react";
import { useState, useEffect } from "react";

const CountButton = () => {
    const [count, setCount] = useState(0);
    // setCountがされてからcountに入るのにタイムラグがあるためprevStateを使った方がよい
    const upCount = () => {
        setCount(prevState => prevState+1);
    };
    const downCount = () => {
        setCount(prevState => prevState-1);
    };

    // useEffectを使用することで再レンダリング(ここではボタンを押した後に数値が変更される)の後に特定の動作を指定することができる
    // 第二引数を指定することで、いつuseEffectが動作するかを指定することができる
    useEffect(() => {
        console.log("current count is...", count)
    }, [count]);

    return(
        <div>
            <p>現在のカウント: {count}</p>
            <button onClick={upCount}>up</button>
            <button onClick={downCount}>down</button>
        </div>
    );
};

export default CountButton;