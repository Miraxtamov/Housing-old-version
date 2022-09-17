import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
	width: 100%;
	max-width: 1220px;
	margin-left: auto;
	margin-right: auto;
	padding-right: 20px;
	padding-left: 20px;
	margin-bottom: 96px;
	position: relative;

	.alice-carousel__prev-btn,
	.alice-carousel__next-btn {
		display: none;
	}

	.alice-carousel__stage {
		display: flex;
		gap: 20px;
	}
`;

Container.Title = styled.div``;

Container.Desc = styled.div`
	margin-bottom: 32px;
`;

export const ArrowsImg = styled.div`
	max-width: 1100px;
	position: absolute;
	top: 50%;

	.left {
		position: absolute;
		right: 15px;
	}

	.right {
		position: absolute;
		left: 1200px;
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
