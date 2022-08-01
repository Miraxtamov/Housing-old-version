import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const Title = styled.div`
	color: var(--primaryColor);
	font-weight: 600;
	font-size: 18px;
	line-height: 28px;
  margin-bottom: 24px;
`;

export const SubTitle = styled.div`
	color: var(--primaryColor);
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
  margin-top: 48px;
  margin-bottom: 24px;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 20px;
`;

export const Input = styled.input`
	width: 100%;
	padding-top: 4px;
	padding-bottom: 4px;
  color: var(--primaryColor);
	border: none;
	outline: none;
	border-bottom: 2px solid #e6e9ec;
`;

Input.Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`

Input.Title = styled.div`
	color: var(--primaryColor);
	font-weight: 600;
	font-size: 14px;
	line-height: 20px;
  margin-bottom: 8px;
`;

export const Message = styled.textarea`
	width: 100%;
	height: 100px;
	border: none;
	outline: none;
	border-bottom: 2px solid #e6e9ec;
	resize: none;
`;