import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Alert } from "antd";
import { useNavigate } from "react-router-dom";
import { CheckboxRememberForgot, Container, Form, Wrapper } from "./style";

const SignIn = () => {
	const [hasError, setHasError] = useState(false);
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit: (value) => {
			fetch("https://houzing-app.herokuapp.com/api/public/auth/login", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					email: value.email,
					password: value.password,
				}),
			})
				.then((res) => res.json())
				.then((res) => (res ? navigate("/home") : {}))
				.catch(() => {
					setHasError(true);
				});
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email("You have entered an invalid email address!")
				.required("Fill in the Blank fields"),
			password: Yup.string().min(8).required("Fill in the Blank fields"),
		}),
	});

	const navigate = useNavigate();

	return (
		<Container>
			<Wrapper>
				<Form onSubmit={formik.handleSubmit}>
					{hasError ? (
						<Alert
							style={{ marginBottom: "10px" }}
							message="Login or Password is wrong"
							type="error"
						/>
					) : (
						<></>
					)}
					<Form.Title>Sign in</Form.Title>
					<Form.Input
						login
						name="email"
						id="email"
						type={"email"}
						placeholder="Email"
						value={formik.values.email}
						onChange={formik.handleChange}
					/>
					<Form.Error>{formik.errors.email}</Form.Error>
					<Form.Input
						psw
						name="password"
						id="password"
						type={"password"}
						placeholder="Password"
						value={formik.values.password}
						onChange={formik.handleChange}
					/>
					<Form.Error>{formik.errors.password}</Form.Error>
					<CheckboxRememberForgot>
						<div style={{ display: "flex", alignItems: "center" }}>
							<CheckboxRememberForgot.Checkbox
								id="checkbox_id"
								type="checkbox"
							/>
							<CheckboxRememberForgot.Label htmlFor="checkbox_id">
								Remember me
							</CheckboxRememberForgot.Label>
						</div>
						<Form.ForgotLink href="#">Forgot</Form.ForgotLink>
					</CheckboxRememberForgot>
					<Form.Button type="submit">Login</Form.Button>
					<Form.Register onClick={() => navigate("/register")}>
						Did you Register?
					</Form.Register>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default SignIn;
