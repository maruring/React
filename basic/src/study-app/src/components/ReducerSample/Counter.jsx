import React, {useReducer} from "react";

const initState = 0;

// reducer関数
const reducerFunc = (countState, action) => {
    switch(action){
        case 'increment':
            return countState + 1
        case 'decrement':
            return countState - 1
        case 'reset':
            return initState
        default:
            return countState
    };
};

const Counter = () => {
    const [count, dispatch] = useReducer(reducerFunc, initState);
    return(
        <div>
            <h2>カウント: {count}</h2>
            <button onClick={() => dispatch('increment')}>プラス</button>
            <button onClick={() => dispatch('decrement')}>マイナス</button>
            <button onClick={() => dispatch('reset')}>リセット</button>
        </div>
    );
};

export default Counter;