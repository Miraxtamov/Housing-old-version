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

export const Row = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

Row.Item = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

export const Subtitle = styled.div`
	color: var(--primaryColor);
	font-weight: 600;
	font-size: 14px;
	line-height: 20px;
`;

export const Description = styled.div`
	color: var(--secondaryColor);
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	margin-left: 8px;
`;
