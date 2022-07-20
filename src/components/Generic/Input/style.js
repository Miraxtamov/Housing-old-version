import styled from "styled-components";

const getType = (type) => {
	switch (type) {
		case "primary":
			return {
				background: "var(--activeColor)",
				color: "var(--defaultColor)",
				border: "none",
			};
		case "secondary":
			return {
				border: "1px solid #E6E9EC",
				color: "var(--primaryColor)",
			};
		default:
			return {
				border: "1px solid #E6E9EC",
				color: "var(--defaultColor)",
			};
	}
};

const Wrapper = styled.div`
	display: flex;
	position: relative;
	width: 100%;
	margin-left: ${({ ml }) => `${ml}px`};
	margin-right: ${({ mr }) => `${mr}px`};
	margin-top: ${({ mt }) => `${mt}px`};
	margin-bottom: ${({ mb }) => `${mb}px`};
`;

const Container = styled.input`
	display: flex;
	width: ${({ width }) => width || "100%"};
	height: ${({ height }) => height || "44px"};
	padding-left: ${({ pl }) => pl || "15px"};
	margin-left: ${({ ml }) => `${ml}px`};
	margin-right: ${({ mr }) => `${mr}px`};
	margin-top: ${({ mt }) => `${mt}px`};
	margin-bottom: ${({ mb }) => `${mb}px`};

	border-radius: 2px;
	border: 1px solid #e6e9ec;
	outline: none;
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	color: var(--primaryColor);
	/* ${({ type }) => getType(type)}; */
`;

const Icon = styled.div`
	position: absolute;
	top: 45.5%;
	left: 30px;
	transform: translate(-50%, -50%);
`;
export { Wrapper, Container, Icon };
