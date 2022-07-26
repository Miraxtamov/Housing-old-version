import React from "react";
import locationIcon from "../../assets/icons/location.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import emailIcon from "../../assets/icons/email.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import downArrowIcon from "../../assets/icons/down-arrow.svg";
import logo from "../../assets/icons/logo.svg";
import {
	Container,
	FooterCol,
	FooterContainer,
	FooterCopyright,
	FooterHr,
	FooterSocialMedia,
} from "./style";

const Footer = () => {
	return (
		<>
			<Container>
				<FooterContainer>
					<FooterCol>
						<FooterCol.Title>Contact Us</FooterCol.Title>
						<FooterCol.ImgInfo>
							<FooterCol.Img src={locationIcon} alt="Location" />
							<FooterCol.Info locationDesc>
								329 Queensberry Street, North Melbourne VIC 3051, Australia.
							</FooterCol.Info>
						</FooterCol.ImgInfo>
						<FooterCol.ImgInfo>
							<FooterCol.Img src={phoneIcon} alt="Phone" />
							<FooterCol.Info>123 456 7890</FooterCol.Info>
						</FooterCol.ImgInfo>
						<FooterCol.ImgInfo>
							<FooterCol.Img src={emailIcon} alt="Location" />
							<FooterCol.Info emailDesc>support@houzing.com</FooterCol.Info>
						</FooterCol.ImgInfo>
						<FooterSocialMedia>
							<FooterSocialMedia.Link facebook href="#">
								<FooterSocialMedia.Img src={facebookIcon} alt="Facebook Icon" />
							</FooterSocialMedia.Link>
							<FooterSocialMedia.Link href="#">
								<FooterSocialMedia.Img src={twitterIcon} alt="Twitter Icon" />
							</FooterSocialMedia.Link>
							<FooterSocialMedia.Link href="#">
								<FooterSocialMedia.Img
									src={instagramIcon}
									alt="Instagram Icon"
								/>
							</FooterSocialMedia.Link>
							<FooterSocialMedia.Link href="#">
								<FooterSocialMedia.Img src={linkedinIcon} alt="Linkedin Icon" />
							</FooterSocialMedia.Link>
						</FooterSocialMedia>
					</FooterCol>
					<FooterCol>
						<FooterCol.Title>Discover</FooterCol.Title>
						<FooterCol.LinksCol>
							<FooterCol.ContainerLink>
								<FooterCol.Link href="#">Chicago</FooterCol.Link>
							</FooterCol.ContainerLink>
							<FooterCol.ContainerLink>
								<FooterCol.Link href="#">Los Angeles</FooterCol.Link>
							</FooterCol.ContainerLink>
							<FooterCol.ContainerLink>
								<FooterCol.Link href="#">Miami</FooterCol.Link>
							</FooterCol.ContainerLink>
							<FooterCol.ContainerLink>
								<FooterCol.Link href="#">New York</FooterCol.Link>
							</FooterCol.ContainerLink>
						</FooterCol.LinksCol>
					</FooterCol>
					<FooterCol>
						<FooterCol.Title>Lists by Category</FooterCol.Title>
						<FooterCol.LinksCol>
							<FooterCol.ContainerLink>
								<FooterCol.Link href="#">Apartments</FooterCol.Link>
							</FooterCol.ContainerLink>
							<FooterCol.ContainerLink>
								<FooterCol.Link href="#">Condos</FooterCol.Link>
							</FooterCol.ContainerLink>
							<FooterCol.ContainerLink>
								<FooterCol.Link href="#">Houses</FooterCol.Link>
							</FooterCol.ContainerLink>
							<FooterCol.ContainerLink>
								<FooterCol.Link href="#">Offices</FooterCol.Link>
							</FooterCol.ContainerLink>
							<FooterCol.ContainerLink>
								<FooterCol.Link href="#">Retail</FooterCol.Link>
							</FooterCol.ContainerLink>
							<FooterCol.ContainerLink>
								<FooterCol.Link href="#">Villas</FooterCol.Link>
							</FooterCol.ContainerLink>
						</FooterCol.LinksCol>
					</FooterCol>
					<FooterCol>
						<FooterCol.Title>Lists by Category</FooterCol.Title>
						<FooterCol.LinksCol>
							<FooterCol.ContainerLink>
								<FooterCol.Link href="#">About Us</FooterCol.Link>
							</FooterCol.ContainerLink>
							<FooterCol.ContainerLink>
								<FooterCol.Link href="#">Terms & Conditions</FooterCol.Link>
							</FooterCol.ContainerLink>
							<FooterCol.ContainerLink>
								<FooterCol.Link href="#">Support Center</FooterCol.Link>
							</FooterCol.ContainerLink>
							<FooterCol.ContainerLink>
								<FooterCol.Link href="#">Contact Us</FooterCol.Link>
							</FooterCol.ContainerLink>
						</FooterCol.LinksCol>
					</FooterCol>
				</FooterContainer>
			</Container>
			<FooterHr />
			<Container>
				<FooterCopyright>
					<FooterCopyright.Logo>
						<FooterCopyright.LogoLink to="/">
							<FooterCopyright.LogoImg src={logo} />
							<FooterCopyright.Title>Houzing</FooterCopyright.Title>
						</FooterCopyright.LogoLink>
					</FooterCopyright.Logo>
					<FooterCopyright.TextArrowLink>
						<FooterCopyright.Text>
							Copyright © {new Date().getFullYear()} CreativeLayers. All Right
							Reserved.
						</FooterCopyright.Text>
						<FooterCopyright.ArrowLink href="#">
							<FooterCopyright.ArrowImg src={downArrowIcon} />
						</FooterCopyright.ArrowLink>
					</FooterCopyright.TextArrowLink>
				</FooterCopyright>
			</Container>
		</>
	);
};

export default Footer;
