import React from "react";
import {title, content} from './index';

const Article = (props) => {
    return (
        <div>
            <title title={props.title} />
            <content content={props.content} />
        </div>
    );
};

export default Article;