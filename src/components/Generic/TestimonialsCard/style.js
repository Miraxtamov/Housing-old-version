import styled from "styled-components";

export const Wrapper = styled.div`
	width: 100%;
`;

export const CardContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin-left: 20px;
`;

CardContainer.AboutOpinion = styled.div`
	color: var(--secondaryColor);
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	padding: 40px 48px 61px 48px;
	box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
	border-radius: 3px;
	background-color: var(--defaultColor);
`;

CardContainer.Img = styled.img`
	position: absolute;
	top: 57%;
	width: 38px;
	height: 38px;
`;

CardContainer.Name = styled.div`
	color: var(--primaryColor);
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	margin-bottom: 4px;
	margin-top: 32px;
`;

CardContainer.Jobs = styled.div`
	color: var(--secondaryColor);
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
  margin-bottom: 48px;
`;
