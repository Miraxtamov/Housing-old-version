import React from "react";
import { Container } from "./style";
import { Button, Result } from "antd";
// import "antd/dist/antd.css";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
	return (
		<Container>
			<Result
				status="404"
				title="404"
				subTitle="Sorry, the page you visited does not exist."
				extra={
					<NavLink to="/home" type="primary">
						Back Home
					</NavLink>
				}
			/>
		</Container>
	);
};

export default ErrorPage;
