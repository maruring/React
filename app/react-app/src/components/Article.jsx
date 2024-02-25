import React from "react";
import { useState } from "react";
import {Title, Content} from './index';


const Article = (props) => {
    const [isPublish, setIsPublished] = useState(false);
    console.log(isPublish);
    return (
        <div>
            <Title title={props.title} />
            <Content content={props.content} />
            <button onClick={() => setIsPublished(true)}>公開</button>
        </div>
    );
};

export default Article;