import styled from "styled-components";
import { ReactComponent as share } from "../../../assets/icons/share.svg";
import { ReactComponent as save } from "../../../assets/icons/heart.svg";
import { ReactComponent as bed } from "../../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../../assets/icons/garage.svg";
import { ReactComponent as ruler } from "../../../assets/icons/ruler.svg";
import { ReactComponent as calendar } from "../../../assets/icons/calendar.svg";
import { ReactComponent as download } from "../../../assets/icons/downloadIcon.svg";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

export const Wrapper = styled.div`
	display: flex;
	max-width: 1440px;
	padding-left: 130px;
	padding-right: 130px;
	width: 100%;
	gap: 20px;
`;

export const ProductViewLeft = styled.div`
	width: 72.5%;

	.share__wrapper {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
`;

ProductViewLeft.Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	.share__wrapper {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.share__wrapper--link {
		color: var(--primaryColor) !important;
	}
`;

ProductViewLeft.Title = styled.div`
	font-weight: 600;
	font-size: 24px;
	line-height: 32px;
	color: var(--primaryColor);
`;

ProductViewLeft.Icons = styled.div`
	display: flex;
	align-items: center;
`;

ProductViewLeft.Icon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 35px;
	height: 35px;
	background: ${({ bg }) => (bg ? "#F6F8F9" : {})};
	border-radius: 60px;
`;

ProductViewLeft.Share = styled(share)``;
ProductViewLeft.Save = styled(save)``;
ProductViewLeft.Bed = styled(bed)``;
ProductViewLeft.Bath = styled(bath)``;
ProductViewLeft.Garage = styled(garage)``;
ProductViewLeft.Ruler = styled(ruler)``;
ProductViewLeft.Calendar = styled(calendar)``;
ProductViewLeft.DownloadIcon = styled(download)``;

ProductViewLeft.Text = styled.div`
	color: var(--secondaryColor);
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	margin-left: 10px;
`;

ProductViewLeft.Description = styled.div`
	color: var(--secondaryColor);
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	margin-bottom: 32px;
	margin-top: 8px;
`;

ProductViewLeft.Sale = styled.div`
	color: var(--secondaryColor);
	text-decoration-line: line-through;
	font-weight: 400;
	font-size: 12px;
	line-height: 20px;
`;

ProductViewLeft.Price = styled.div`
	color: var(--primaryColor);
	letter-spacing: -0.02em;

	font-weight: 600;
	font-size: 24px;
	line-height: 32px;
`;

ProductViewLeft.SubTitle = styled.div`
	color: var(--primaryColor);
	font-weight: 600;
	font-size: 18px;
	line-height: 28px;
	margin-top: 48px;
	margin-bottom: 16px;
`;

ProductViewLeft.SubDescription = styled.div`
	color: var(--secondaryColor);
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
`;

ProductViewLeft.ShowMoreBtn = styled.div`
	color: var(--activeColor);
	text-decoration-line: underline;
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	margin-top: 24px;
	margin-bottom: 64px;
	cursor: pointer;
`;

ProductViewLeft.DownloadName = styled.div`
	color: var(--secondaryColor);
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	margin-left: 8px;
`;

ProductViewLeft.DownloadText = styled.div`
	color: var(--activeColor);
	letter-spacing: 0.01em;
	text-decoration-line: underline;
	text-transform: uppercase;
	font-weight: 600;
	font-size: 12px;
	line-height: 20px;
	margin-left: 24px;
`;

ProductViewLeft.Line = styled.div`
	border: 1px solid #e6e9ec;
	margin-top: 48px;
	margin-bottom: 48px;
`;

ProductViewLeft.Right = styled.div`
	width: 280px;
`;
