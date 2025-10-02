import React, {useState} from 'react'

import { Jumbotron } from "react-bootstrap"
import {LoginForm} from '../../components/login/Login.comp'
import { ResetPassword } from '../../components/password-reset/PasswordReset.comp'

import './entry.style.css'

export const Entry = () => {
	const [email, setemail] = useState('')
	const [password, setpassword] = useState('')
	const [frmLoad, setFrmLoad] = useState('login')

	const handleOnChange = e =>{
		const {name, value} = e.target

		switch(name){
			case 'email':
				setemail(value)
				break
			
			case 'password':
				setpassword(value)
				break
			
			default:
				break	
		}
	};

  const handleOnSubmit = (e) => {
	e.preventDefault()

	if(!email || !password){
		return alert("Fill up the entire form please.");
	}

	//TODO call api to submit form
	console.log(email, password)
  };

  const handleOnResetSubmit = (e) => {
	e.preventDefault()

	if(!email){
		return alert("Please enter email");
	}

	//TODO call api to submit form
	console.log(email)
  };

  const formSwitcher = frmType =>{
	setFrmLoad(frmType);
  };

  return (
	<div className='entry-page bg-info'>
		<Jumbotron className='form-box'>
			{frmLoad == 'login' && (
				<LoginForm
				handleOnChange={handleOnChange}
				handleOnSubmit={handleOnSubmit}
				formSwitcher={formSwitcher}
				email = {email}
				pass={password}
			/>)}
			
			{frmLoad == 'rest' &&(
				<ResetPassword
				handleOnChange={handleOnChange}
				handleOnResetSubmit={handleOnResetSubmit}
				formSwitcher={formSwitcher}
				email = {email}
			/>)}
		</Jumbotron>
	</div>
  )
}
