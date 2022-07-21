import styled from "styled-components";

export const CardItem = styled.div`
	border: 1px solid #e6e9ec;
	border-radius: 3px;
	padding: 1px;
	position: relative;
`;

CardItem.Img = styled.img`
	width: 100%;
	height: 220px;
	position: relative;
	margin-bottom: -50px;
	z-index: 0;
`;

CardItem.SaleProfileImg = styled.div`
	position: absolute;
	top: 18px;
	width: 100%;
	height: 222px;
	margin: auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-right: 20px;
	padding-left: 20px;
`;

CardItem.Sales = styled.div`
	display: flex;
	justify-content: space-between;
	color: var(--defaultColor);
`;

CardItem.Featured = styled.div`
	background-color: var(--activeColor);
	border-radius: 3px;
	padding: 5px 10px;
`;

CardItem.Sale = styled(CardItem.Featured)`
	background-color: var(--primaryColor);
`;

CardItem.ProfileImg = styled.img`
	z-index: 1;
	position: relative;
	top: 0px;
	width: 38px;
	height: 38px;
	box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
	border: 2px solid var(--defaultColor);
	border-radius: 50%;
	margin-left: auto;
	margin-top: auto;
`;

CardItem.Title = styled.h1`
	color: var(--primaryColor);
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	margin-bottom: 4px;
	margin-top: 70px;
	padding-left: 20px;
`;

CardItem.Description = styled.div`
	color: var(--secondaryColor);
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	padding-left: 20px;
	margin-bottom: 16px;
`;

export const CardIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-right: 20px;
	padding-left: 20px;
`;

CardIcons.CardIcon = styled.div`
	text-align: center;
`;

CardIcons.Img = styled.img`
	margin-bottom: 5px;

	& path {
		fill: #696969 !important;
	}
`;

CardIcons.CardIconText = styled.div`
	color: var(--secondaryColor);
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	margin-bottom: 16px;
`;

CardItem.Hr = styled.hr`
	background: #e6e9ec;
	margin-bottom: 8px;
`;

export const CardItemPriceLike = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 20px;
	padding-right: 20px;
	margin-bottom: 8px;
`;

CardItem.Prices = styled.div`
	display: flex;
	flex-direction: column;
`;

CardItem.Discount = styled.div`
	color: var(--secondaryColor);
	text-decoration-line: line-through;
	font-size: 12px;
	line-height: 20px;
`;

CardItem.Price = styled.div`
	color: var(--primaryColor);
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
`;

CardItem.ResizeLike = styled.div`
	display: flex;
	align-items: center;
`;

CardItem.ResizeImg = styled.img`
	margin-right: 20px;
	cursor: pointer;
`;

CardItem.HeartImg = styled.img`
	background-color: #f6f8f9;
	border-radius: 60px;
	padding: 11px 10px;
	cursor: pointer;
`;
