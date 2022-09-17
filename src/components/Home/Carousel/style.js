import styled from "styled-components";

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const Container = styled.div`
	width: 100%;
	height: 571px;
	position: relative;
	margin-bottom: 96px;
`;

export const ArrowsImg = styled.div`
	max-width: 1220px;
	position: absolute;
	top: 400px;

	.left {
		position: absolute;
		right: 592px;
	}

	.right {
		position: absolute;
		left: 592px;
	}
`;

export const ArrowImg = styled.img`
	position: absolute;
	width: 45px;
	height: 45px;
	padding: 12px;
	background-color: rgba(255, 255, 255, 0.5);
	color: var(--primaryColor);
	border-radius: 50%;
	cursor: pointer;
	z-index: 9999;

	&:hover {
		background-color: rgba(255, 255, 255, 0.9);
	}

	path {
		fill: var(--primaryColor);
	}
`;

export const HomeImgContainer = styled.div``;

export const HomeBgImg = styled.img`
	width: 100%;
	height: 571px;
	object-fit: cover;
	filter: brightness(30%);
	background-size: cover;
	background-repeat: no-repeat;
`;

export const HomeTextsContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	align-items: center;
	flex-direction: column;
`;

HomeTextsContainer.Wrapper = styled.div`
	position: relative;
`;

HomeTextsContainer.Title = styled.div`
	color: var(--defaultColor);
	letter-spacing: -0.02em;
	font-weight: 700;
	font-size: 44px;
	line-height: 48px;
	margin-bottom: 8px;
	cursor: pointer;

	&:hover {
		opacity: 0.7;
	}
`;

HomeTextsContainer.Description = styled.div`
	color: var(--defaultColor);
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	margin-bottom: 24px;
`;

HomeTextsContainer.ImgsContainer = styled.div`
	display: flex;
	align-items: center;
	text-align: center;
	margin-bottom: 24px;
`;

HomeTextsContainer.ImgText = styled.div`
	margin-left: 24px;
	display: flex;
	flex-direction: column;
	align-items: center;

	&:first-of-type {
		margin-left: 0;
	}
`;

HomeTextsContainer.Img = styled.img`
	color: var(--defaultColor);

	svg path {
		fill: var(--defaultColor) !important;
	}
`;

HomeTextsContainer.Text = styled.div`
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: var(--defaultColor);
`;

HomeTextsContainer.Price = styled.div`
	color: var(--defaultColor);
	letter-spacing: -0.02em;
	font-weight: 600;
	font-size: 28px;
	line-height: 36px;
	margin-bottom: 48px;
`;
