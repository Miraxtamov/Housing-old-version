import styled from "styled-components";
import { ReactComponent as star } from "../../../../assets/icons/star.svg";

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Title = styled.div`
	color: var(--primaryColor);
	font-weight: 600;
	font-size: 18px;
	line-height: 28px;
	margin-bottom: 34px;
`;

export const SubDesc = styled.div`
	color: var(--secondaryColor);
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
`;

export const Star = styled(star)`
	margin-left: 5px;

	&:first-of-type {
		margin-left: 0;
	}
`;
