import React from "react";
import { useNavigate } from "react-router-dom";
import { Popover } from "antd";
import { Outlet } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import { navbar } from "../../utils/navbar";
import Button from "../Generic/Button";
import userLogin from "../../assets/icons/loginUser.svg";
import {
	Container,
	Logo,
	LogoImg,
	LogoLink,
	LogoTitle,
	Nav,
	Navigation,
} from "./style";
import { user } from "../../utils/user";

const Navbar = () => {
	const navigate = useNavigate();

	const content = () => {
		return user.map((value) => (
			<Navigation.UserNavbar key={value.id}>
				<Navigation.UserLi onClick={() => navigate(value?.path)}>
					{value?.title}
				</Navigation.UserLi>
			</Navigation.UserNavbar>
		));
	};

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
					{localStorage.getItem("token") ? (
						<Popover trigger="click" placement="bottomRight" content={content}>
							<div>
								<Navigation.UserLogin src={userLogin} alt="User login" />
							</div>
						</Popover>
					) : (
						<Navigation.NavLinkHref to={"/signin"}>
							<Button width={"120px"}>Login</Button>
						</Navigation.NavLinkHref>
					)}
				</Nav>
			</Container>
			<Outlet />
		</>
	);
};

export default Navbar;
