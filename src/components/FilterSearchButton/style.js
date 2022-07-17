import styled from "styled-components";

export const Container = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	background-color: var(--defaultColor);
	padding-right: 130px;
	padding-left: 130px;
	margin-top: 10px;
`;

export const FilterSearchContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 64px;
`;

export const FilterSearchInputContainer = styled.div`
	border: 1px solid #e6e9ec;
	color: var(--primaryColor);
	width: 527px;
	border-radius: 2px;
	padding: 12px;
	display: flex;
`;

export const FilterSearchInput = styled.input`
	outline: none;
	border: none;
	width: 100%;
	padding-left: 8px;
	color: var(--primaryColor);
	font-size: 14px;
	line-height: 20px;
`;

FilterSearchInput.Img = styled.img``;

export const FilterSearchButtons = styled.button`
	border: 1px solid #e6e9ec;
	border-radius: 2px;
	cursor: pointer;
	padding: 12px 30px;
	background-color: var(--defaultColor);
	display: flex;
	align-items: center;
	color: var(--primaryColor);
	font-size: 14px;
	line-height: 20px;
	margin-left: 20px;
`;

export const FilterButtonImg = styled.img`
	margin-right: 8px;
`;

export const FilterSearchButtonsSearch = styled.button`
	display: flex;
	align-items: center;
	border: 1px solid #e6e9ec;
	border-radius: 2px;
	cursor: pointer;
	font-size: 14px;
	line-height: 20px;
	margin-left: 20px;
	padding: 12px 54px;
	color: var(--defaultColor);
	background-color: var(--activeColor);
`;