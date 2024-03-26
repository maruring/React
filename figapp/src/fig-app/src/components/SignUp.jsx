import React, {useState} from "react";
import { Link } from 'react-router-dom';

import TextForm from './TextForm';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const SignUp = () => {
    const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
    const [validatePassword, setValidatePassword] = useState('');

	const inputEmail = (e) => {
		setEmail(e.target.value);
	};

	const inputPassword = (e) => {
		setPassword(e.target.value);
	};

    const inputValidatePassword = (e) => {
        setValidatePassword(e.target.value);
    };

	const handleClick = () => {
		const isEqual = (password === validatePassword);

	}


    return(
		<Container maxWidth="sm">
			<Stack spacing={2} >
				<TextForm formType='email' title='Email' id='email' value={email} onChange={inputEmail} />
				<TextForm formType='password' title='Password' id='password' value={password} onChange={inputPassword} />
                <TextForm formType='password' title='Passwordをもう一度入力してください' id='ValidatePassword' value={validatePassword} onChange={inputValidatePassword} />
			</Stack>
			<Stack spacing={2} >
				<Button variant="contained">アカウント作成</Button>
				<p>or</p>
				<Button variant="contained">Googleアカウントで作成</Button>
			</Stack>
			<Button variant="contained" component={Link} to="/" >ログイン画面に移動</Button>
		</Container>
    );
};

export default SignUp;