import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const Wrapper = styled.div`
	width: 1440px;
	padding: 64px 20px;
	display: flex;
	justify-content: center;
	@media (max-width: 768px) {
		width: 100%;
		padding: 64px 0;
	}
`;

export const Form = styled.form`
	width: 580px;
	background: #ffffff;
	border: 1px solid #e6e9ec;
	box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
	border-radius: 3px;
	padding: 24px 30px 48px 30px;

	@media (max-width: 768px) {
		width: 95%;
	}
`;

Form.Title = styled.div`
	color: var(--primaryColor);
	font-weight: 600;
	font-size: 18px;
	line-height: 28px;
	margin-bottom: 48px;
`;

Form.Input = styled.input`
	color: var(--primaryColor);
	outline: none;
	border: none;
	border-bottom: 2px solid #e6e9ec;

	&::placeholder {
		color: var(--secondaryColor);
		line-height: 20px;
	}

	padding: 4px 4px 4px 0;
	color: var(--primaryColor);
	width: 100%;
	font-size: 14px;

	&:focus {
		border-bottom: 2px solid var(--activeColor);
	}
`;

export const CheckboxRememberForgot = styled.div`
	display: flex;
	justify-content: space-between;
	align-self: flex-start;
	margin-bottom: 28px;
`;

CheckboxRememberForgot.Checkbox = styled.input`
	width: 18px;
	height: 18px;
	border: 2px solid #e6e9ec;
`;

CheckboxRememberForgot.Label = styled.label`
	margin-left: 11px;
	color: var(--secondaryColor);
	font-size: 14px;
	line-height: 20px;
`;

Form.ForgotLink = styled.a`
	color: var(--activeColor);
	text-decoration: underline;
	font-size: 16px;
	line-height: 24px;

	&:hover {
		text-decoration: underline;
	}
`;

Form.Button = styled.button`
	width: 100%;
	background-color: var(--activeColor);
	color: var(--defaultColor);
	border: none;
	font-weight: 400;
	font-style: 14px;
	line-height: 20px;
	padding-top: 12px;
	padding-bottom: 12px;
	border-radius: 2px;
	cursor: pointer;
	-webkit-touch-callout: none; // iOS Safari
	-webkit-user-select: none; // Safari
	-khtml-user-select: none; // Konqueror HTML
	-moz-user-select: none; // Old versions of Firefox
	-ms-user-select: none; // Internet Explorer/Edge
	user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Opera and Firefox */

	&:active {
		transform: scale(0.98);
		opacity: 0.7;
	}
`;

Form.Register = styled.div`
	cursor: pointer;
	margin-top: 20px;
	text-align: center;
	color: var(--activeColor);
	font-weight: 500;

	&:hover {
		text-decoration: underline;
	}
`;

Form.Error = styled.div`
	color: red;
	font-size: 14px;
	line-height: 20px;
`;
