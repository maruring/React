import React from "react";

const Button = React.memo((props) => {
    console.log('button レンダリング');
    return(
        <button type="button" onClick={props.handleClick}>
            {props.value}
        </button>
    );
});

export default Button;