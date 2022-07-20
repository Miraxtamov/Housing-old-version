import React from "react";
import { Carousel } from "antd";
import homeHouse1 from "../../assets/imgs/house-home1.png";
import homeHouse2 from "../../assets/imgs/house-home2.png";
import bed from "../../assets/icons/bed.svg";
import bath from "../../assets/icons/bath.svg";
import garage from "../../assets/icons/garage.svg";
import ruler from "../../assets/icons/ruler.svg";

import {
	Container,
	HomeBgImg,
	HomeImgContainer,
	HomeTextsContainer,
	Wrapper,
} from "./style";
import Button from "../Generic/Button";

const Home = () => {
	return (
		<Wrapper>
			<Container>
				<Carousel dots autoplay>
					<HomeImgContainer>
						<HomeBgImg src={homeHouse1} alt="Home House" />
					</HomeImgContainer>
					<HomeImgContainer>
						<HomeBgImg src={homeHouse2} alt="Home House" />
					</HomeImgContainer>
				</Carousel>
				<HomeTextsContainer>
					<HomeTextsContainer.Title>
						Skyper Pool Partment
					</HomeTextsContainer.Title>
					<HomeTextsContainer.Description>
						112 Glenwood Ave Hyde Park, Boston, MA
					</HomeTextsContainer.Description>
					<HomeTextsContainer.ImgsContainer>
						<HomeTextsContainer.ImgText>
							<HomeTextsContainer.Img src={bed} />
							<HomeTextsContainer.Text>4 Beds</HomeTextsContainer.Text>
						</HomeTextsContainer.ImgText>
						<HomeTextsContainer.ImgText>
							<HomeTextsContainer.Img src={bath} />
							<HomeTextsContainer.Text>5 Baths</HomeTextsContainer.Text>
						</HomeTextsContainer.ImgText>
						<HomeTextsContainer.ImgText>
							<HomeTextsContainer.Img src={garage} />
							<HomeTextsContainer.Text>1 Garage</HomeTextsContainer.Text>
						</HomeTextsContainer.ImgText>
						<HomeTextsContainer.ImgText>
							<HomeTextsContainer.Img src={ruler} />
							<HomeTextsContainer.Text>1200 Sq Ft</HomeTextsContainer.Text>
						</HomeTextsContainer.ImgText>
					</HomeTextsContainer.ImgsContainer>
					<HomeTextsContainer.Price>$5,250/mo</HomeTextsContainer.Price>
					<Button width={"180px"}>Read more</Button>
				</HomeTextsContainer>
			</Container>
		</Wrapper>
	);
};

export default Home;
