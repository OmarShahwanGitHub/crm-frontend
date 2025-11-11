import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { loginSuccess } from "../login/loginSlice";
import { getUserProfile } from "../../pages/dashboard/userAction";

import { fetchNewAccessJWT } from "../../api/userApi";

import { DefaultLayout } from "../../layout/DefaultLayout";

export const PrivateRoute = ({ children, ...rest }) => {
	const dispatch = useDispatch();
	const { isAuth } = useSelector(state => state.login);
	const { user } = useSelector(state => state.user);

	useEffect(() => {
		const updateAccessJWT = async () => {
			const result = await fetchNewAccessJWT();
			result && dispatch(loginSuccess());
		};

		!user._id && dispatch(getUserProfile());

		!sessionStorage.getItem("accessJWT") &&
			localStorage.getItem("crmSite") &&
			updateAccessJWT();

		!isAuth && sessionStorage.getItem("accessJWT") && dispatch(loginSuccess());
	}, [dispatch, isAuth, user._id]);

	return (
		<Route
			{...rest}
			render={({ location }) => {
				// Check both isAuth state and token in sessionStorage
				const hasToken = sessionStorage.getItem("accessJWT");
				const isAuthenticated = isAuth || hasToken;
				
				if (isAuthenticated) {
					// If we have token but isAuth is false, update it
					if (hasToken && !isAuth) {
						dispatch(loginSuccess());
					}
					return <DefaultLayout>{children}</DefaultLayout>;
				} else {
					return (
						<Redirect
							to={{
								pathname: "/",
								state: { from: location },
							}}
						/>
					);
				}
			}}
		/>
	);
};
