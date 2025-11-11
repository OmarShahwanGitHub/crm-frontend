import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
	Container,
	Row,
	Col,
	Form,
	Button,
	Spinner,
	Alert,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { loginPending, loginSuccess, loginFail } from "./loginSlice";
import { userLogin } from "../../api/userApi";
import { getUserProfile } from "../../pages/dashboard/userAction";

export const LoginForm = ({ formSwitcher }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	let location = useLocation();

	const { isLoading, isAuth, error } = useSelector(state => state.login);
	let { from } = location.state || { from: { pathname: "/" } };

	useEffect(() => {
		// Check if already logged in on component mount
		if (sessionStorage.getItem("accessJWT") && !isAuth) {
			dispatch(loginSuccess());
			dispatch(getUserProfile());
			history.replace("/dashboard");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleOnChange = e => {
		const { name, value } = e.target;

		switch (name) {
			case "email":
				setEmail(value);
				break;

			case "password":
				setPassword(value);
				break;

			default:
				break;
		}
	};

	const handleOnSubmit = async e => {
		e.preventDefault();
		e.stopPropagation();

		if (!email || !password) {
			alert("Fill up all the form!");
			return;
		}

		// Prevent double submission
		if (isLoading) {
			return;
		}

		dispatch(loginPending());

		try {
			const response = await userLogin({ email, password });
			
			// Check if response has error status
			if (response && response.status === "error") {
				dispatch(loginFail(response.message || "Login failed"));
				return;
			}

			// Check if tokens were set (indicates success)
			const accessToken = sessionStorage.getItem("accessJWT");
			if (accessToken || (response && response.status === "success")) {
				// Update auth state immediately
				dispatch(loginSuccess());
				
				// Fetch user profile in background (don't wait)
				dispatch(getUserProfile());
				
				// Use requestAnimationFrame to ensure state is updated before redirect
				requestAnimationFrame(() => {
					history.replace("/dashboard");
				});
			} else {
				dispatch(loginFail("Login failed. Please check your credentials."));
			}
		} catch (error) {
			console.error("Login error:", error);
			const errorMessage = error.response?.data?.message || 
			                     error.message || 
			                     "Login failed. Please try again.";
			dispatch(loginFail(errorMessage));
		}
	};

	return (
		<Container>
			<Row>
				<Col>
					<h1 className="text-info text-center">Client Login</h1>
					<hr />
					{error && <Alert variant="danger">{error}</Alert>}
					<Form autoComplete="off" onSubmit={handleOnSubmit}>
						<Form.Group>
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								type="email"
								name="email"
								value={email}
								onChange={handleOnChange}
								placeholder="Enter Email"
								required
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								name="password"
								onChange={handleOnChange}
								value={password}
								placeholder="password"
								required
							/>
						</Form.Group>

						<Button type="submit" disabled={isLoading}>
							{isLoading ? (
								<>
									<Spinner
										as="span"
										animation="border"
										size="sm"
										role="status"
										aria-hidden="true"
										className="me-2"
									/>
									Logging in...
								</>
							) : (
								"Login"
							)}
						</Button>
					</Form>
					<hr />
				</Col>
			</Row>

			<Row>
				<Col>
					<a href="/password-reset">Forget Password?</a>
				</Col>
			</Row>
			<Row className="py-4">
				<Col>
					Are you new here? <a href="/registration">Register Now</a>
				</Col>
			</Row>
		</Container>
	);
};

LoginForm.propTypes = {
	formSwitcher: PropTypes.func.isRequired,
};
