import styled from "styled-components";

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;

	&:hover {
		transform: scale(1.03);
		box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
			rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
	}
`;

export const ArrowImgCards = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

ArrowImgCards.Img = styled.img``;

export const CardItem = styled.div`
	position: relative;
	width: 100%;
	min-height: 250px;
	border: 1px solid #e6e9ec;
	border-radius: 3px;
	padding: 1px;
`;

CardItem.Img = styled.img`
	width: 100%;
	height: 220px;
	min-height: 220px;
	max-height: 220px;
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
	cursor: pointer;
	object-fit: cover;
`;

CardItem.Title = styled.h1`
	color: var(--primaryColor);
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	margin-top: 24px;
	width: 90%;
	margin: 24px auto 4px auto;
	white-space: nowrap; 
	cursor: pointer;
	overflow: hidden;
`;

CardItem.Description = styled.div`
	color: var(--secondaryColor);
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	width: 90%;
	margin: auto;
	white-space: nowrap;
	overflow: hidden;
`;

export const CardIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	width: 90%;
	margin: 16px 20px;
	white-space: nowrap;
`;

CardIcons.CardIcon = styled.div`
	text-align: center;
	padding-left: 15px;

	&:first-of-type {
		padding-left: 0;
	}
`;

CardIcons.Img = styled.img`
	margin-bottom: 5px;
	color: var(--secondaryColor);
`;

CardIcons.CardIconText = styled.div`
	color: var(--secondaryColor);
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	margin-bottom: 16px;
	white-space: nowrap;
`;

CardItem.Hr = styled.hr`
	border: 1px solid #e6e9ec;
	margin-bottom: 8px;
`;

export const CardItemPriceLike = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 20px;
	padding-right: 20px;
	margin-top: auto;
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

	&:active {
		transform: scale(0.97);
	}
`;

CardItem.HeartImg = styled.img`
	background-color: ${(props) => (props.bg ? "#cc5040" : "#f6f8f9")};
	border-radius: 60px;
	padding: 10px;
	cursor: pointer;

	&:active {
		transform: scale(0.97);
	}
`;
