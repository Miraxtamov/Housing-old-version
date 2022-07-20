import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div``;

export const Container = styled.div`
  background-color: var(--primaryColor);
  color: var(--defaultColor)
  margin-bottom: 10px;
`;

export const Nav = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 14px 130px 14px 130px;

	-webkit-touch-callout: none; // iOS Safari
	-webkit-user-select: none; // Safari
	-khtml-user-select: none; // Konqueror HTML
	-moz-user-select: none; // Old versions of Firefox
	-ms-user-select: none; // Internet Explorer/Edge
	user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Opera and Firefox */
`;

export const Logo = styled.div`
	display: flex;
	align-items: center;
`;

export const LogoLink = styled(NavLink)`
	display: flex;
	align-items: center;
`;

export const LogoImg = styled.img``;

export const LogoTitle = styled.div`
	margin-left: 11px;
	font-weight: 600;
	font-size: 18px;
	color: var(--defaultColor);
`;

export const Navigation = styled.div`
	display: flex;
	justify-content: space-between;
`;

Navigation.NavList = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

Navigation.NavItem = styled.li`
	margin-right: 64px;
`;

Navigation.NavLinkHref = styled(NavLink)`
	font-size: 16px;
	color: var(--defaultColor);
	line-height: 24px;
	font-weight: 400;

	&.active {
		color: var(--activeColor);
	}
`;
