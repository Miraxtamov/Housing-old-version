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

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

Wrapper.Col = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
`;

Wrapper.Box = styled.div`
	display: flex;
	align-items: center;
`;

export const SubTitle = styled.div`
	color: var(--primaryColor);
	font-weight: 600;
	font-size: 14px;
	line-height: 20px;
`;

export const SubDesc = styled.div`
	color: var(--secondaryColor);
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	margin-left: 8px;
`;
