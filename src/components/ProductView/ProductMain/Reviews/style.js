import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
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
	align-items: center;
	width: 100%;

	.progress {
		margin-left: 50px;
    width: 310px;
	}
`;

export const Description = styled.div``;
