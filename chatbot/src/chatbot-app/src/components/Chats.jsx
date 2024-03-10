import React, {memo} from "react";
import List from '@mui/material/List';
import Chat from "./Chat";
import { makeStyles, createStyles } from "@mui/material";

const useStyles = makeStyles(() => {
    createStyles({
        "chats": {
            height: 400,
            padding: "0px",
            overflow: "auto" //400pxを超えた場合にスクロールバーを表示する
        }
    })
});

const Chats = memo((props) => {
    const classes = useStyles();
    return(
        <List className={classes.chats}>
            {props.chats.map((chat, index) => {
                return <Chat text={chat.text} type={chat.type} key={index.toString()} />
                })}
        </ List>
    );
});

export default Chats;