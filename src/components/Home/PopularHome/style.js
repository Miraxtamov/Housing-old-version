import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 96px;
`;

export const TextsBtnImg = styled.div`
	/* width: 100%; */
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
	/* left: 38%; */
	/* transform: translate(50%, -100%); */
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
