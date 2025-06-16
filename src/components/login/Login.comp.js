import React from 'react';
import PropTypes from 'prop-types'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { type } from '@testing-library/user-event/dist/type'

export const LoginForm = ({handleOnChange, handleOnSubmit, email, pass}) => {
	return (
		<Container>
			<Row>
				<Col>
					<h1 className='text-info text-center'>Client Login</h1>
					<hr />
					<Form autoComplete='off' onSubmit={handleOnSubmit}>
						<Form.Group>
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								type='email'
								name='email'
								value={email}
								onChange ={handleOnChange}
								placeholder='Enter Email'
								
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type='password'
								name='password'
								value={pass}
								onChange ={handleOnChange}
								placeholder='password'
								
							/>
						</Form.Group>
						<Button variant="primary" type="submit">Login</Button>
					</Form>
					<hr />
				</Col>
			</Row>

			<Row>
				<Col>
				<a href='#!'>Forget Password?</a>
				</Col>
			</Row>
		</Container>
	)
}

LoginForm.propTypes ={
	handleOnChange: PropTypes.func.isRequired,
	email: PropTypes.string.isRequired,
	pass: PropTypes.string.isRequired,

}