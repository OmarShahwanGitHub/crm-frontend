import React, {useState} from 'react'
import { Jumbotron } from "react-bootstrap"
import './entry.style.css'

import {LoginForm} from '../../components/login/Login.comp'

export const Entry = () => {
	const [email, setemail] = useState('')
	const [password, setpassword] = useState('')

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
		console.log(name, value)
	};

  const handleOnSubmit = e => {
	e.preventDefault()

	if(!email || !password){
		alert("Fill up all the form")
	}

  }

  return (
	<div className='entry-page bg-info'>
		<Jumbotron className='form-box'>
			<LoginForm
				handleOnChange={handleOnChange}
				email = {email}
				pass={password}
			/>
		</Jumbotron>
	</div>
  )
}
