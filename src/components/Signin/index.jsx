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
					email: value?.email,
					password: value?.password,
				}),
			})
				.then((res) => res.json())
				.then((res) =>
					res
						? setTimeout(() => {
								localStorage.setItem("token", res?.authenticationToken);
								navigate("/home");
								// window.location.reload();
						  }, 1500)
						: null
				)
				.catch(() => {
					setHasError(true);
				});
		},
		validationSchema: Yup.object().shape({
			email: Yup.string()
				.email("You have entered an invalid email address!")
				.required("Fill in the Blank fields"),
			password: Yup.string()
				.min(8) // Please create a stronger password {matches or pattern}
				.required("Fill in the Blank fields"),
		}),
	});

	console.log(formik);

	const navigate = useNavigate();

	return (
		<Container>
			<Wrapper>
				<Form autoComplete="on" onSubmit={formik.handleSubmit}>
					{hasError ? (
						<Alert
							style={{ marginBottom: "10px" }}
							message="Email or Password is wrong"
							type="error"
							closable
							showIcon
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
						onBlur={formik.handleBlur}
					/>
					<div style={{ marginBottom: "44px" }}>
						{formik.errors.email && formik.touched.email ? (
							<Form.Error>{formik.errors.email}</Form.Error>
						) : null}
					</div>
					<Form.Input
						psw
						name="password"
						id="password"
						type={"password"}
						placeholder="Password"
						value={formik.values.password}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					<div style={{ marginBottom: "16px" }}>
						{formik.errors.password && formik.touched.password ? (
							<Form.Error>{formik.errors.password}</Form.Error>
						) : null}
					</div>
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
					<Form.Register onClick={() => navigate("/signup")}>
						Did you Register?
					</Form.Register>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default SignIn;
