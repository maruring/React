import React from "react";

const authorName = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <p>{props.updateAt}</p>
        </div>
    );
};

export default authorName;