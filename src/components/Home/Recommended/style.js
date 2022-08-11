import styled from "styled-components";

export const Wrapper = styled.div`
	width: 100%;
	margin: auto;
`;

export const Container = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	padding-right: 130px;
	padding-left: 130px;
`;

Container.Title = styled.div``;

Container.Description = styled.div`
	margin-bottom: 32px;
`;

Container.Card = styled.div`
	position: relative;

	.alice-carousel__prev-btn,
	.alice-carousel__next-btn {
		display: none;
	}

	.alice-carousel__stage {
		display: flex;
		gap: 40px;
		margin-bottom: 32px;
	}

	.alice-carousel__dots {
		margin-top: 0;
	}
`;

export const ArrowsImg = styled.div`
	width: 100%;
	max-width: 1200px;
	position: absolute;
	top: 40%;

	.left {
		position: absolute;
		left: -100px;
	}

	.right {
		position: absolute;
		right: -100px;
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
