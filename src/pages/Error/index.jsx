import React from "react";
import { Container } from "./style";
import { Button, Result } from "antd";
import { ButtonGeneric } from "../../components/Generic/Button";

const ErrorPage = () => {
	return (
		<Container>
			<Result
				status="404"
				title="404"
				subTitle="Sorry, the page you visited does not exist."
				extra={<ButtonGeneric type="primary">Back Home</ButtonGeneric>}
			/>
		</Container>
	);
};

export default ErrorPage;
