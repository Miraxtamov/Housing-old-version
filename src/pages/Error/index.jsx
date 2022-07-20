import React from "react";
import { Container } from "./style";
import { Button, Result } from "antd";

const ErrorPage = () => {
	return (
		<Container>
			<Result
				status="404"
				title="404"
				subTitle="Sorry, the page you visited does not exist."
				extra={
					<Button type="primary">
						Back Home
					</Button>
				}
			/>
		</Container>
	);
};

export default ErrorPage;
