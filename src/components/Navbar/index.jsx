import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import { navbar } from "../../utils/navbar";
import FilterSearchButton from "../FilterSearchButton";
import {
	Container,
	Logo,
	LogoImg,
	LogoLink,
	LogoTitle,
	Nav,
	NavButton,
	Navigation,
} from "./style";

const Navbar = () => {
	return (
		<>
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
							{navbar?.map((value) => {
								return (
									<Navigation.NavItem key={value.id}>
										<Navigation.NavLinkHref to={value.path}>
											{value.title}
										</Navigation.NavLinkHref>
									</Navigation.NavItem>
								);
							})}
							<Navigation.NavLinkHref to={"/login"}>
								<NavButton>Login</NavButton>
							</Navigation.NavLinkHref>
						</Navigation.NavList>
					</Navigation>
				</Nav>
			</Container>
			<FilterSearchButton />
			<Outlet />
		</>
	);
};

export default Navbar;
