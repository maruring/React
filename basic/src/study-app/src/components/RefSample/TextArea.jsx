import React, {useRef, useState} from "react";

const TextArea = () => {
    const ref = useRef(null);
    const [text, setText] = useState("");

    const handleClick = () => {
        setText(ref.current.value);
    }

    return(
        <div>
            <input ref={ref} type="text" />
            <button onClick={handleClick}>Set Text</button>
            <p>テキスト: {text}</p>
        </div>
    );
};
// useRefを使用することでbuttonを押したときのみレンダリングが発生する

export default TextArea;