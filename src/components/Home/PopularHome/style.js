import styled from "styled-components";

export const Wrapper = styled.div`
	width: 100%;
`;

export const Container = styled.div`
	margin-bottom: 96px;
`;

export const TextsBtnImg = styled.div`
	width: 100%;
	position: relative;
`;

TextsBtnImg.Img = styled.img`
	width: 100%;
	height: 571px;
	object-fit: cover;
	filter: brightness(30%);
	background-size: cover;
	background-repeat: no-repeat;
`;

TextsBtnImg.TextsBtn = styled.div`
	width: 100%;
	position: absolute;
	top: 204px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

TextsBtnImg.Texts = styled.div`
	width: 567px;
	text-align: center;
	color: var(--defaultColor);
	letter-spacing: -0.02em;
	font-weight: 600;
	font-size: 28px;
	line-height: 36px;
	margin-bottom: 48px;
`;
