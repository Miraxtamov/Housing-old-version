import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import { navbar } from "../../utils/navbar";
import Button from "../Generic/Button";
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
						</Navigation.NavList>
					</Navigation>
					<Navigation.NavLinkHref to={"/login"}>
						<Button width={"120px"}>Login</Button>
					</Navigation.NavLinkHref>
				</Nav>
			</Container>
			<Outlet />
		</>
	);
};

export default Navbar;
