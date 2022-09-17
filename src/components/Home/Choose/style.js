import styled from "styled-components";

export const Container = styled.div`
	background-color: #f5f7fc;
	margin-top: 48px;
	margin-bottom: 96px;
`;

export const ChooseContainer = styled.div`
	max-width: 1220px;
	margin-left: auto;
	margin-right: auto;
	padding: 48px 20px;
`;

ChooseContainer.Title = styled.div``;

ChooseContainer.Desc = styled.div`
	margin-bottom: 40px;
`;

export const ChooseCards = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 81px;
`;

export const ChooseCard = styled.div`
	text-align: center;
`;

ChooseCard.Img = styled.img`
	margin-bottom: 24px;
`;

ChooseCard.Title = styled.div`
	color: var(--primaryColor);
	font-weight: 600;
	font-size: 18px;
	line-height: 28px;
	margin-bottom: 8px;
	white-space: nowrap;
`;

ChooseCard.Desc = styled.div`
	color: var(--secondaryColor);
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
`;
