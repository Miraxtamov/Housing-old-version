import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import { Container, LogoutButton, MyProfileContainer, Wrapper } from "./style";
import {
	AppstoreAddOutlined,
	LogoutOutlined,
	UserOutlined,
} from "@ant-design/icons";
import profileImg from "../../assets/imgs/profile.png";
import Button from "../Generic/Button";
import MenuItem from "antd/lib/menu/MenuItem";
const { Sider } = Layout;

const MyProfile = () => {
	const navigate = useNavigate();

	const logout = () => {
		localStorage.removeItem("token");
		setTimeout(() => {
			navigate("/home");
		}, 900);
	};

	return (
		<Wrapper>
			<Layout>
				<Sider trigger={null}>
					<Menu theme="dark" defaultSelectedKeys={["1"]}>
						<MenuItem key={"1"} onClick={() => navigate("/profile")}>
							<UserOutlined />
							<span>My Information</span>
						</MenuItem>
						<MenuItem key={"2"} onClick={() => navigate("/post-new-ad")}>
							<AppstoreAddOutlined />
							<span>Post new ad</span>
						</MenuItem>
						<MenuItem className="menu-item-logout" key={"3"} onClick={logout}>
							<LogoutOutlined style={{ color: "#cc5040" }} />
							<LogoutButton>Log Out</LogoutButton>
						</MenuItem>
					</Menu>
				</Sider>
				<Container>
					<MyProfileContainer>
						<MyProfileContainer.Title>My Profile</MyProfileContainer.Title>
						<MyProfileContainer.ImgContainer>
							<MyProfileContainer.ProfileImg src={profileImg} />
						</MyProfileContainer.ImgContainer>
						<MyProfileContainer.ProfileWrapper>
							<MyProfileContainer.Inputs>
								<MyProfileContainer.Label>Name</MyProfileContainer.Label> <br />
								<MyProfileContainer.Input
									type="text"
									placeholder="Name"
									value="Jodie"
								/>
							</MyProfileContainer.Inputs>
							<MyProfileContainer.Inputs>
								<MyProfileContainer.Label>Surname</MyProfileContainer.Label>
								<br />
								<MyProfileContainer.Input
									type="text"
									placeholder="Surname"
									value="Salter"
								/>
							</MyProfileContainer.Inputs>
							<MyProfileContainer.Inputs>
								<MyProfileContainer.Label>Email</MyProfileContainer.Label>
								<br />
								<MyProfileContainer.Input
									type="email"
									placeholder="Email"
									value="example@gmail.com"
								/>
							</MyProfileContainer.Inputs>
							<MyProfileContainer.Inputs>
								<MyProfileContainer.Label>
									Change password
								</MyProfileContainer.Label>
								<br />
								<MyProfileContainer.Input
									style={{ marginBottom: "24px" }}
									type="password"
									placeholder="New password"
								/>
								<MyProfileContainer.Input
									type="password"
									placeholder="Password confirmation"
								/>
							</MyProfileContainer.Inputs>
							<MyProfileContainer.BtnChange>
								<Button
									ml={"auto"}
									className="change__btn"
									width={"180px"}
									type="primary"
								>
									Change
								</Button>
							</MyProfileContainer.BtnChange>
						</MyProfileContainer.ProfileWrapper>
					</MyProfileContainer>
				</Container>
			</Layout>
		</Wrapper>
	);
};

export default MyProfile;
