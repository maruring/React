import React from "react";
import { useState } from "react";
import {Title, Content, PublishButton, CountButton} from './index';


const Article = (props) => {
    const [isPublished, setIsPublished] = useState(false);
    const [countNum, UpCount] = useState(0);
    const publishArticle = () => {
        setIsPublished(true);
    };
    const upCount = () => {
        UpCount(countNum+1)
    };
    return (
        <div>
            <Title title={props.title} />
            <Content content={props.content} />
            <PublishButton isPublished={isPublished} onClick={publishArticle} />
            <CountButton count={countNum} onClick={upCount} />
        </div>
    );
};

export default Article;