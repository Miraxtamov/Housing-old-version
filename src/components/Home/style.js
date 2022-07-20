import styled from "styled-components";

export const Wrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	justify-content: center;
`;

export const Container = styled.div`
	width: 100%;
	height: 571px;
	position: relative;
	margin-bottom: 96px;
`;

export const HomeImgContainer = styled.div``;

export const HomeBgImg = styled.img`
	width: 100%;
	height: 571px;
	object-fit: cover;
	filter: brightness(30%);
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

HomeTextsContainer.Title = styled.div`
	color: var(--defaultColor);
	letter-spacing: -0.02em;
	font-weight: 700;
	font-size: 44px;
	line-height: 48px;
	margin-bottom: 8px;
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

	&:first-of-type {
		margin-left: 0;
	}
`;

HomeTextsContainer.Img = styled.img``;

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
