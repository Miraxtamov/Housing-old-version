import styled from "styled-components";

export const ModalContainer = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	position: relative;
	top: 8px;
`;

ModalContainer.Title = styled.div`
	color: var(--primaryColor);
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	margin-bottom: 10px;
	padding-left: 14px;
`;

export const ModalAddressContainer = styled.div`
	display: flex;
	align-items: center;
	padding-left: 14px;
	padding-right: 14px;
	column-gap: 20px;
	padding-bottom: 20px;
`;

export const ModalButtonContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 20px;
	border-radius: 0px 0px 5px 5px;
	width: 100%;
	margin-top: 20px;
	margin-bottom: 20px;
`;
