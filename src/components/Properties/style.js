import styled from "styled-components";

export const PropertiesContainer = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	padding-right: 130px;
	padding-left: 130px;

	@media (max-width: 768px) {
		padding: 0;
	}
`;

PropertiesContainer.Title = styled.div`
	margin-top: 64px;
`;

PropertiesContainer.Description = styled.div`
	margin-bottom: 65px;
`;

export const CardResultSortBy = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 16px;
`;

CardResultSortBy.Result = styled.div`
	color: var(--primaryColor);
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
`;

CardResultSortBy.SpanBold = styled.span`
	font-weight: 600;
	margin-right: 5px;
`;

export const CardResultSortByButton = styled.div`
	color: var(--primaryColor);
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
`;

CardResultSortByButton.Select = styled.select`
	color: var(--primaryColor);
	font-size: 14px;
	line-height: 20px;
	outline: none;
	border: none;
	border-bottom: 2px solid #e6e9ec;
`;

CardResultSortByButton.Option = styled.option`
	bottom: none;
`;

export const WrapperFlex = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const CardContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
	z-index: 0;

	@media (max-width: 768px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
