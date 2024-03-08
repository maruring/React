import React, {useState, useCallback} from "react";
import Title from "./Title";
import Button from "./Button";

const CallbackCounter = () => {
    const [countState, setCountState] = useState(0);
    const incrementCounter = useCallback(() => setCountState(countState + 1), [countState]);
    const decrementCounter = useCallback(() => setCountState(countState - 1), [countState]);
    return(
        <div>
            {/* useCallbackを使用することでbuttonタグの部分だけが再レンダリングされるようになる */}
            <Title title={'callback関数を学習する'} />
            <p>{countState}</p>
            <Button handleClick={incrementCounter} value={'+'} />
            <Button handleClick={decrementCounter} value={'-'} />
        </div>
    );
};

export default CallbackCounter;