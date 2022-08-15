import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Container, Form, Wrapper } from "./style";

const SignUp = () => {
	const navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			login: "",
			email: "",
			firstName: "",
			lastName: "",
			password: "",
			userRole: "",
			confirmPassword: "",
		},
		onSubmit: (value) => {
			fetch("https://houzing-app.herokuapp.com/api/public/auth/register", {
				method: "POST",
				headers: {
					"Content-type": "Application/json",
				},
				body: JSON.stringify({
					// login: value?.login,
					email: value?.email,
					firstName: value?.firstName,
					lastName: value?.lastName,
					password: value?.password,
					// useRole: value?.userRole,
					// confirmPassword: value?.confirmPassword,
				}),
			})
				.then((res) => res.json())
				.then(
					(res) => {
						console.log(res);
						if (res.success) {
							setTimeout(() => {
								navigate("/home");
							}, 5000);
						} else {
							alert("Invalid");
						}
					},
					(err) => console.log(err)
				);
		},
		onError: (err) => console.log(err),
		validationSchema: Yup.object({
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
						type={"text"}
						placeholder="Login"
						onChange={formik.handleChange}
					/>
					<div style={{ marginBottom: "44px" }}>
						{formik.errors.login && formik.touched.login ? (
							<Form.Error>{formik.errors.login}</Form.Error>
						) : null}
					</div>
					<Form.Input
						id="fName"
						name="firstName"
						type={"text"}
						placeholder="First name"
						onChange={formik.handleChange}
					/>
					<div style={{ marginBottom: "44px" }}>
						{formik.errors.firstName && formik.touched.firstName ? (
							<Form.Error>{formik.errors.firstName}</Form.Error>
						) : null}
					</div>
					<Form.Input
						id="lName"
						name="lastName"
						type={"text"}
						placeholder="Last name"
						onChange={formik.handleChange}
					/>
					<div style={{ marginBottom: "44px" }}>
						{formik.errors.lastName && formik.touched.lastName ? (
							<Form.Error>{formik.errors.lastName}</Form.Error>
						) : null}
					</div>
					<Form.Input
						id="email"
						name="email"
						type={"email"}
						placeholder="Email"
						onChange={formik.handleChange}
					/>
					<div style={{ marginBottom: "44px" }}>
						{formik.errors.email && formik.touched.email ? (
							<Form.Error>{formik.errors.email}</Form.Error>
						) : null}
					</div>
					<Form.Input
						id="role"
						name="useRole"
						type={"text"}
						placeholder="User role"
						onChange={formik.handleChange}
					/>
					<div style={{ marginBottom: "44px" }}>
						{formik.errors.userRole && formik.touched.userRole ? (
							<Form.Error>{formik.errors.userRole}</Form.Error>
						) : null}
					</div>
					<Form.Input
						id="password"
						name="password"
						type={"password"}
						placeholder="Password"
						onChange={formik.handleChange}
					/>
					<div style={{ marginBottom: "44px" }}>
						{formik.errors.password && formik.touched.password ? (
							<Form.Error>{formik.errors.password}</Form.Error>
						) : null}
					</div>
					<Form.Input
						id="confirmPassword"
						name="confirmPassword"
						type={"password"}
						placeholder="Re-enter password"
						onChange={formik.handleChange}
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
