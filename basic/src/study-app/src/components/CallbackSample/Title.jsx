import React from "react";

// memo化
const Title = React.memo((props) => {
    console.log('Titleレンダリング');
    return(
        <h2>{props.title}</h2>
    );
});

export default Title;