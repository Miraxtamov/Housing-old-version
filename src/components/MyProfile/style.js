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

	.menu-item-logout:hover.ant-menu-item-selected {
		background-color: transparent;
		color: #cc5040;
	}

	.menu-item-logout:active {
		transform: scale(0.98);
	}
`;

export const Container = styled.div`
	width: 100%;
	height: fit-content;
	max-width: 1220px;
	margin-left: auto;
	margin-right: auto;
	padding: 24px 25px;
	background-color: var(--defaultColor);
	display: flex;
	background-color: #a4cdda;
`;

export const LogoutButton = styled.button`
	border: none;
	background-color: transparent;
	color: #cc5040;
	cursor: pointer;
	margin-left: 10px;
`;

export const MyProfileContainer = styled.div`
	flex: 5;
	padding: 20px;
	background-color: var(--defaultColor);
`;

MyProfileContainer.ProfileWrapper = styled.div``;

MyProfileContainer.ProfileName = styled.div``;

MyProfileContainer.Title = styled.div`
	color: var(--primaryColor);
	letter-spacing: -0.02em;
	font-weight: 600;
	font-size: 28px;
	line-height: 36px;
`;

MyProfileContainer.ImgContainer = styled.div``;

MyProfileContainer.ProfileImg = styled.img`
	width: 20px;
	height: 20px;
	object-fit: cover;
	margin-top: 24px;
	margin-bottom: 24px;
	cursor: pointer;

	&:hover {
		filter: brightness(60%);
	}
`;

MyProfileContainer.Inputs = styled.div`
	width: 70%;
	margin-bottom: 24px;
`;

MyProfileContainer.Label = styled.label`
	color: var(--primaryColor);
	font-weight: 600;
	font-size: 15px;
	line-height: 28px;
	margin-bottom: 5px;
`;

MyProfileContainer.Input = styled.input`
	width: 100%;
	border: none;
	outline: none;
	border-bottom: 2px solid #e6e9ec;
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	color: var(--primaryColor);
	padding-top: 4px;
	padding-bottom: 4px;

	::placeholder {
		color: var(--secondaryColor);
	}

	&:focus {
		border-bottom: 2px solid var(--activeColor);
	}
`;

MyProfileContainer.BtnChange = styled.div`
	.change__btn {
		margin-left: auto;
	}
`;
