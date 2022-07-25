import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
	background-color: var(--primaryColor);
`;

export const FooterContainer = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	padding: 24px 130px 24px 130px;
`;

export const FooterCol = styled.div``;

FooterCol.Title = styled.div`
	color: var(--defaultColor);
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	margin-top: 24px;
	margin-bottom: 32px;
`;

FooterCol.ImgInfo = styled.div`
	display: flex;
	align-items: flex-start;
	margin-bottom: 20px;
`;

FooterCol.Img = styled.img``;

FooterCol.Info = styled.div`
	color: var(--defaultColor);
	margin-left: 21px;
	font-size: 14px;
	line-height: 20px;
	width: ${(props) => (props.locationDesc ? "256px" : {})};
	margin-bottom: ${(props) => (props.emailDesc ? "40px" : {})};
`;

export const FooterSocialMedia = styled.div`
	display: flex;
	align-items: center;
`;

FooterSocialMedia.Link = styled.a`
	margin-left: ${(props) => (props.facebook ? "0" : "37px")};
	font-size: 14px;
	line-height: 16px;
	color: var(--defaultColor);
`;

FooterSocialMedia.Img = styled.img`
	padding: 11px;
	color: var(--defaultColor);

	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 3px;
		padding: 11px;
	}
`;

FooterCol.LinksCol = styled.div``;

FooterCol.ContainerLink = styled.div`
	margin-bottom: 20px;
	font-size: 14px;
	line-height: 20px;
`;

FooterCol.Link = styled.a`
	font-weight: 400;
	color: var(--defaultColor);
`;

export const FooterHr = styled.hr`
	background-color: rgba(255, 255, 255, 0.15);
`;

export const FooterCopyright = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	background-color: var(--primaryColor);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 24px 130px 24px 130px;
`;

FooterCopyright.Logo = styled.div`
	display: flex;
	align-items: center;
`;

FooterCopyright.LogoLink = styled(NavLink)`
	display: flex;
	align-items: center;
`;

FooterCopyright.LogoImg = styled.img``;

FooterCopyright.Title = styled.div`
	margin-left: 11px;
	font-weight: 600;
	font-size: 18px;
	color: var(--defaultColor);
`;

FooterCopyright.TextArrowLink = styled.div`
	display: flex;
	align-items: center;
`;

FooterCopyright.Text = styled.div`
	color: var(--defaultColor);
`;

FooterCopyright.ArrowLink = styled.a``;

FooterCopyright.ArrowImg = styled.img`
	padding: 20px;
	background-color: var(--activeColor);
	margin-left: 73px;
	border-radius: 3px;
`;
