import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin-top: 24px;
	margin-bottom: 24px;
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	max-width: 1220px;
	padding-left: 20px;
	padding-right: 20px;
	width: 100%;
`;

export const PhotoBoxContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 400px;
	grid-gap: 20px;
`;

export const PhotoLeftBox = styled.div``;

PhotoBoxContainer.Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const PhotoRightBox = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 190px 190px;
	grid-gap: 20px;
`;
