import styled from "styled-components";

export const Container = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	background-color: #f5f7fc;
`;

export const ChooseContainer = styled.div`
	margin-top: 48px;
	margin-bottom: 96px;
	padding: 48px 130px;
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
`;

ChooseCard.Desc = styled.div`
	color: var(--secondaryColor);
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
`;
