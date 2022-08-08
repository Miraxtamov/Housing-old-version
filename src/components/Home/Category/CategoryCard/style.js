import styled from "styled-components";

export const Container = styled.div``;

export const CategoryCard1 = styled.div`
	position: relative;
	width: 280px;
	height: 350px;
	border-radius: 3px;
	overflow: hidden;
	text-align: center;
	box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
		0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
`;

CategoryCard1.SvgTitle = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	text-align: center;
	transform: translate(-50%, -50%);
`;

CategoryCard1.Img = styled.img`
	width: 100%;
	cursor: pointer;
	object-fit: cover;

	&:hover {
		transform: scale(1.19);
	}
`;

CategoryCard1.Svg = styled.img`
	margin-bottom: 24px;
`;

CategoryCard1.Title = styled.div`
	color: var(--defaultColor);
	font-weight: 600;
	font-size: 18px;
	line-height: 28px;
`;
