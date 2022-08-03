import React from "react";
import { useFormik } from "formik";
import {useNavigate} from "react-router-dom"
import * as Yup from "yup";
import { Container, Form, Wrapper } from "./style";

const SignUp = () => {
  const navigate = useNavigate()
	const formik = useFormik({
		initialValues: {
			login: "",
			firstName: "",
			lastName: "",
			email: "",
			userRole: "",
			password: "",
			confirmPassword: "",
		},
		onSubmit: (value) => {
			fetch("https://houzing-app.herokuapp.com/api/public/auth/login", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					login: value?.login,
					firstName: value?.firstName,
					lastName: value?.lastName,
					email: value?.email,
					useRole: value?.useRole,
					password: value?.password,
					confirmPassword: value?.confirmPassword,
				}),
			})
				.then((res) => res.json())
				.then((res) => res)
				.catch((err) => {
					console.log(err);
				});
		},
		validationSchema: Yup.object().shape({
			login: Yup.string().required("Fill in the Blank fields"),
			firstName: Yup.string().required("Fill in the Blank fields"),
			lastName: Yup.string().required("Fill in the Blank fields"),
			email: Yup.string()
				.email("You have entered an invalid email address!")
				.required("Fill in the Blank fields"),
			useRole: Yup.string().required("Fill in the Blank fields"),
			password: Yup.string().min(8).required("Fill in the Blank fields"),
			confirmPassword: Yup.string()
				.oneOf([Yup.ref("password"), null], "Passwords must match")
				.required("Fill in the Blank fields"),
		}),
	});

	return (
		<Container>
			<Wrapper>
				<Form onSubmit={formik.handleSubmit}>
					<Form.Title>Registration</Form.Title>
					<Form.Input
						name="login"
						id="login"
						type={"text"}
						placeholder="Login"
						value={formik.values.login}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					<div style={{ marginBottom: "44px" }}>
						{formik.errors.login && formik.touched.login ? (
							<Form.Error>{formik.errors.login}</Form.Error>
						) : null}
					</div>
					<Form.Input
						name="firstName"
						id="firstName"
						type={"text"}
						placeholder="First name"
						value={formik.values.firstName}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					<div style={{ marginBottom: "44px" }}>
						{formik.errors.firstName && formik.touched.firstName ? (
							<Form.Error>{formik.errors.firstName}</Form.Error>
						) : null}
					</div>
					<Form.Input
						name="lastName"
						id="lastName"
						type={"text"}
						placeholder="Last name"
						value={formik.values.lastName}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					<div style={{ marginBottom: "44px" }}>
						{formik.errors.lastName && formik.touched.lastName ? (
							<Form.Error>{formik.errors.lastName}</Form.Error>
						) : null}
					</div>
					<Form.Input
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
						name="useRole"
						id="useRole"
						type={"text"}
						placeholder="User role"
						value={formik.values.useRole}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					<div style={{ marginBottom: "44px" }}>
						{formik.errors.userRole && formik.touched.userRole ? (
							<Form.Error>{formik.errors.userRole}</Form.Error>
						) : null}
					</div>
					<Form.Input
						name="password"
						id="password"
						type={"password"}
						placeholder="Password"
						value={formik.values.password}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					<div style={{ marginBottom: "44px" }}>
						{formik.errors.password && formik.touched.password ? (
							<Form.Error>{formik.errors.password}</Form.Error>
						) : null}
					</div>
					<Form.Input
						name="confirmPassword"
						id="confirmPassword"
						type={"password"}
						placeholder="Re-enter password"
						value={formik.values.confirmPassword}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					<div style={{ marginBottom: "44px" }}>
						{formik.errors.confirmPassword && formik.touched.confirmPassword ? (
							<Form.Error>{formik.errors.confirmPassword}</Form.Error>
						) : null}
					</div>
					<Form.Button type="submit">Register</Form.Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default SignUp;
