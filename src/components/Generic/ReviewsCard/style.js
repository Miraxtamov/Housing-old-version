import styled from "styled-components";
import { ReactComponent as star } from "../../../assets/icons/star.svg";

export const Card = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
`;

Card.Img = styled.img`
	width: 52px;
	height: 52px;
	margin-bottom: 10px;
`;

Card.Name = styled.div`
	color: var(--primaryColor);
	font-weight: 600;
	font-size: 16px;
	line-height: 20px;
	margin-bottom: 4px;
`;

Card.Wrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
`;

Card.SubDesc = styled.div`
	color: var(--secondaryColor);
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	white-space: nowrap;
`;

Card.Star = styled(star)`
	margin-left: 5px;
`;

Card.Description = styled.div`
	color: var(--secondaryColor);
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
  width: 75%;
`;
