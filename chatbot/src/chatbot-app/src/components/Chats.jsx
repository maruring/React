import React, {memo} from "react";
import List from '@mui/material/List';
import Chat from "./Chat";
import styled from "@emotion/styled";

const ListStyled = styled(List)({
    height: 400,
    padding: "0px",
    overflow: "auto" //400pxを超えた場合にスクロールバーを表示する
});

const Chats = memo((props) => {
    return(
        <ListStyled id={"scroll-area"}>
            {props.chats.map((chat, index) => {
                return <Chat text={chat.text} type={chat.type} key={index.toString()} />
                })}
        </ ListStyled>
    );
});

export default Chats;