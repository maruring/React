import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import TextForm from './TextForm';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import Amplify, {I18n} from 'aws-amplify';
import Auth from './auth/auth'
import COGNITO_ERROR from './constants/i18n';

Amplify.configure(Auth);

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [user, setUser] = useState({});
	const [showConfirmation, setShowConfirmation] = useState(false);

	const inputEmail = (e) => {
			setEmail(e.target.value);
	};

	const inputPassword = (e) => {
			setPassword(e.target.value);
	};

	const signInHandleClick = () => {
		Auth.signIn(email, password)
		.then(user => {
			if (!user.signInUserSession){
				setUser({user});
				setShowConfirmation(true);
			} else {
				
			}
		})
	};

	return(
		<Container maxWidth="sm">
			<Stack spacing={2} >
				<TextForm formType='email' label='Email' id='email' value={email} onChange={inputEmail} />
				<TextForm formType='password' label='password' id='password' value={password} onChange={inputPassword} />
			</Stack>
			<Stack spacing={2} >
				<Button variant="contained">ログイン</Button>
				<p>or</p>
				<Button variant="contained">Googleアカウントでログイン</Button>
			</Stack>
			<Button variant="contained" component={Link} to="/signup" >アカウントの作成</Button>
		</Container>
	);
};

export default SignIn;
