import React, {useState} from 'react';
import TextForm from './TextForm';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const inputEmail = (e) => {
        setEmail(e.target.value);
    };

    const inputPassword = (e) => {
        setPassword(e.target.value);
    };

    return(
        <div>
            <Container maxWidth="sm">
                <TextForm formType='email' title='Email' id='email' value={email} onChange={inputEmail} />
                <TextForm formType='password' title='password' id='password' value={password} onChange={inputPassword} />
            <Container />
            <Stack spacing={2} >
                <Button variant="contained">ログイン</Button>
                <p>or</p>
                <Button variant="contained">Googleアカウントでログイン</Button>
            </Stack>
        </div>
    );
};

export default SignIn;
