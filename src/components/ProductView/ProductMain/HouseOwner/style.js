import styled from "styled-components";

export const OwnerCard = styled.div`
	border: 1px solid #e6e9ec;
	border-radius: 3px;
	width: 280px;
	padding: 20px;
`;

export const PersonInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 0 10px;
`;

export const PersonImg = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	cursor: pointer;
`;

export const Title = styled.div`
	font-weight: 600;
	font-size: 14px;
	line-height: 20px;
	color: var(--primaryColor);
`;

export const PhoneNumber = styled.div`
	color: var(--secondaryColor);
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
`;

export const Input = styled.input`
	padding-top: 4px;
	padding-bottom: 4px;
	width: 100%;
	border: none;
	outline: none;
	border-bottom: 2px solid #e6e9ec;
	margin-top: 20px;
`;

export const Message = styled.textarea`
	font-size: 12px;
	width: 100%;
	height: 55px;
	border: none;
	outline: none;
	border-bottom: 2px solid #e6e9ec;
	resize: none;
`;
