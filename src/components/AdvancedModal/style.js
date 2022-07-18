import styled from "styled-components";

export const ModalContainer = styled.div`
	position: absolute;
	z-index: 2;
	top: 157px;
	left: 172px;
	padding-top: 30px;
	padding-bottom: 30px;
	width: 850px;
	height: 400px;
	border-radius: 5px;
	box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
	background-color: var(--defaultColor);
`;

ModalContainer.Title = styled.div`
	color: var(--primaryColor);
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	margin-bottom: 10px;
	padding-left: 30px;
`;

export const ModalAddressContainer = styled.div`
	display: flex;
	align-items: center;
	padding-left: 30px;
	padding-right: 30px;
`;

ModalAddressContainer.ModalAddressInput = styled.input`
	border: 1px solid #e6e9ec;
	border-radius: 2px;
	color: var(--primaryColor);
	font-size: 14px;
	line-height: 20px;
	outline: none;
	padding: 12px;
	margin-bottom: 20px;
	width: 175px;
	margin-left: ${(props) => (props.firstML ? "0" : "20px")};
`;

export const ModalButtonContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	background: #f6f8f9;
	border-radius: 0px 0px 5px 5px;
	width: 850px;
`;

ModalButtonContainer.ModalCancelButton = styled.button`
	color: var(--primaryColor);
	font-size: 14px;
	line-height: 20px;
	padding: 12px 40px;
	border: 1px solid var(--primaryColor);
	border-radius: 2px;
	cursor: pointer;
	margin-top: 20px;
	margin-bottom: 20px;
`;

ModalButtonContainer.ModalSubmitButton = styled.button`
	background: var(--activeColor);
	outline: none;
	border: 2px solid var(--activeColor);
	border-radius: 2px;
	color: var(--defaultColor);
	font-size: 14px;
	line-height: 20px;
	padding: 12px 38px;
	margin-top: 20px;
	margin-bottom: 20px;
	cursor: pointer;
	margin-left: 20px;
	margin-right: 30px;
`;
