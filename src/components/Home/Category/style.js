import styled from "styled-components";

export const Wrapper = styled.div`
	width: 1348px;
	margin: auto;
`

export const Container = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	padding-right: 130px;
	padding-left: 130px;
	margin-bottom: 96px;
	position: relative;

	.alice-carousel__prev-btn,
	.alice-carousel__next-btn {
		display: none;
	}
`;

Container.Title = styled.div``;

Container.Desc = styled.div`
	margin-bottom: 32px;
`;

export const ArrowsImg = styled.div`
	max-width: 1180px;
	position: absolute;
	top: 50%;

	.left {
		position: absolute;
		right: 55px;
	}

	.right {
		position: absolute;
		left: 1145px;
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
	box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
	filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
		drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
		drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
	border: 1px solid #e6e9ec;

	&:hover {
		box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.5);
	}
`;
