import styled from "styled-components";

export const MyPropertiesContainer = styled.table`
	width: 100%;
	border: 1px solid #e6e9ec;
	box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
	border-radius: 3px;
	background: var(--defaultColor);
	text-align: left;
`;

MyPropertiesContainer.TR = styled.tr`
	margin-bottom: 16px;
`;

MyPropertiesContainer.TH = styled.th`
	padding-top: 24px;
	padding-bottom: 16px;
	color: var(--primaryColor);
	font-weight: 600;
	font-size: 18px;
	line-height: 28px;
	padding-left: ${(props) => (props.ml ? "92px" : {})};
	white-space: nowrap;
`;

MyPropertiesContainer.TD = styled.td``;

MyPropertiesContainer.Left = styled.div`
	padding-left: 30px;
`;

MyPropertiesContainer.IMG = styled.img`
	position: relative;
	width: 113px;
	height: 113px;
	border-radius: 3px;
	object-fit: cover;
`;

MyPropertiesContainer.Featured = styled.div`
	position: relative;
	width: 71px;
	top: -79%;
	left: 4px;
	border-radius: 3px;
	background-color: var(--activeColor);
	color: var(--defaultColor);
	padding: 5px 12px;
	font-weight: 600;
	font-size: 10px;
	line-height: 13px;
	z-index: 99;
`;

MyPropertiesContainer.Center = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 16px;
`;

MyPropertiesContainer.CenterTitle = styled.div`
	color: var(--primaryColor);
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	margin-bottom: 4px;
	white-space: nowrap;
	cursor: pointer;

	&:hover {
		opacity: 0.7;
	}
`;

MyPropertiesContainer.CenterDescription = styled.div`
	color: var(--secondaryColor);
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	margin-bottom: 21px;
`;

MyPropertiesContainer.CenterSales = styled.div`
	color: var(--secondaryColor);
	text-decoration-line: line-through;
	font-weight: 400;
	font-size: 12px;
	line-height: 20px;
`;

MyPropertiesContainer.CenterPrice = styled.div`
	color: var(--primaryColor);
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
`;

MyPropertiesContainer.Right = styled.div`
	margin-left: 7px;
`;

MyPropertiesContainer.RightForSale = styled.div`
	color: var(--defaultColor);
	font-weight: 600;
	font-size: 10px;
	line-height: 13px;
	padding: 5px 12px;
	background-color: var(--primaryColor);
	border-radius: 3px;
	white-space: nowrap;
`;

MyPropertiesContainer.Info = styled.div`
	color: var(--secondaryColor);
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
`;

MyPropertiesContainer.Edit = styled.img`
	color: var(--secondaryColor);
	width: 16px;
	height: 16px;
	cursor: pointer;

	&:active {
		transform: scale(0.97);
	}
`;

MyPropertiesContainer.Trash = styled.img`
	cursor: pointer;
	margin-left: 33px;

	&:active {
		transform: scale(0.97);
	}
`;
