import React from "react";
import logo from "../../assets/icons/logo.svg";
import { navbar } from "../../utils/navbar";
import {
	Container,
	Logo,
	LogoImg,
	LogoLink,
	LogoTitle,
	Nav,
	Navigation,
} from "./style";

const Navbar = () => {
	return (
		<Container>
			<Nav>
				<Logo>
					<LogoLink to="/">
						<LogoImg src={logo} />
						<LogoTitle>Houzing</LogoTitle>
					</LogoLink>
				</Logo>
				<Navigation>
					<Navigation.NavList>
						<Navigation.NavItem>
							{navbar.map((value) => {
								return (
									<Navigation.NavLinkHref to={value.path}>{value.title}</Navigation.NavLinkHref>
								);
							})}
						</Navigation.NavItem>
					</Navigation.NavList>
				</Navigation>
			</Nav>
		</Container>
	);
};

export default Navbar;
