import styled from "styled-components";

export const Wrapper = styled.div`
	width: 100%;

	.ant-layout-sider,
	.ant-menu.ant-menu-dark {
		background: var(--primaryColor);
	}

	.ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal)
		.ant-menu-item-selected:not(:last-of-type) {
		background-color: var(--activeColor);
	}

	.logout, {
	.logout:hover
		color: #cc5040;
	}

	.ant-menu-title-content {
		color: #cc5040;
	}

	.logout:hover.ant-menu-item-selected {
		background-color: transparent;
		color: #cc5040;
	}

	.logout:active {
		transform: scale(0.98);
	}
`;

export const Container = styled.div`
	max-width: 1440px;
	margin-left: auto;
	margin-right: auto;
	padding: 24px 25px;
	background-color: var(--defaultColor);
`;

export const LogoutButton = styled.button`
	border: none;
	background-color: transparent;
	color: #cc5040;
	cursor: pointer;
	margin-left: 10px;
`;
