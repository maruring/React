import React, {memo, useState} from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextInput from "./TextInput";

const FormDialog = memo((props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

    const inputName = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    };

    const inputEmail = (e) => {
        setEmail(e.target.value);
    };

    const inputDescription = (e) => {
        setDescription(e.target.value);
    };

    return(
        <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">問合せフォーム</DialogTitle>
            <DialogContent>
                <TextInput 
                    label={"お名前"} multiline={false} rows={1}
                    value={name} type={"text"} onChange={inputName}
                />
                <TextInput 
                    label={"メールアドレス"} multiline={false} rows={1}
                    value={email} type={"email"} onChange={inputEmail}
                />
                <TextInput 
                    label={"説明"} multiline={true} rows={5}
                    value={description} type={"text"} onChange={inputDescription}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>送信しない</Button>
                <Button onClick={props.handleClose}>送信する</Button>
            </DialogActions>
        </Dialog>
    );
});

export default FormDialog;