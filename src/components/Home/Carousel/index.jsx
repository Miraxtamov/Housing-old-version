import React, { useRef } from "react";
import { Carousel } from "antd";
import homeHouse1 from "../../../assets/imgs/house-home1.png";
import homeHouse2 from "../../../assets/imgs/house-home1.png";
import bed from "../../../assets/icons/bed.svg";
import bath from "../../../assets/icons/bath.svg";
import garage from "../../../assets/icons/garage.svg";
import ruler from "../../../assets/icons/ruler.svg";
import prev from "../../../assets/icons/prev.svg";
import next from "../../../assets/icons/next.svg";

import {
	ArrowImg,
	ArrowsImg,
	Container,
	HomeBgImg,
	HomeImgContainer,
	HomeTextsContainer,
	Wrapper,
} from "./style";
import Button from "../../Generic/Button";

const contentStyle = {
	width: "100%",
	height: "571px",
	objectFit: "cover",
	filter: "brightness(30%)",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
};

const Carousel1 = () => {
	const slider = useRef();

	return (
		<Wrapper>
			<ArrowsImg>
				<ArrowImg
					className="left"
					src={prev}
					onClick={() => slider?.current?.prev()}
				/>
				<ArrowImg
					className="right"
					src={next}
					onClick={() => slider?.current?.next()}
				/>
			</ArrowsImg>
			<Container>
				<Carousel autoplay>
					<div>
						<HomeTextsContainer.Wrapper>
							<HomeImgContainer>
								<HomeBgImg src={homeHouse1} alt="Home House" />
							</HomeImgContainer>
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
										<HomeTextsContainer.Text>
											1200 Sq Ft
										</HomeTextsContainer.Text>
									</HomeTextsContainer.ImgText>
								</HomeTextsContainer.ImgsContainer>
								<HomeTextsContainer.Price>$5,250/mo</HomeTextsContainer.Price>
								<Button width={"180px"}>Read more</Button>
							</HomeTextsContainer>
						</HomeTextsContainer.Wrapper>
					</div>
					<div>
						<HomeTextsContainer.Wrapper>
							<HomeImgContainer>
								<HomeBgImg src={homeHouse2} alt="Home House" />
							</HomeImgContainer>
							<HomeTextsContainer>
								<HomeTextsContainer.Title>
									Skyper Pool Partment 2
								</HomeTextsContainer.Title>
								<HomeTextsContainer.Description>
									112 Glenwood Ave Hyde Park, Boston, MA 2
								</HomeTextsContainer.Description>
								<HomeTextsContainer.ImgsContainer>
									<HomeTextsContainer.ImgText>
										<HomeTextsContainer.Img src={bed} />
										<HomeTextsContainer.Text>3 Beds</HomeTextsContainer.Text>
									</HomeTextsContainer.ImgText>
									<HomeTextsContainer.ImgText>
										<HomeTextsContainer.Img src={bath} />
										<HomeTextsContainer.Text>8 Baths</HomeTextsContainer.Text>
									</HomeTextsContainer.ImgText>
									<HomeTextsContainer.ImgText>
										<HomeTextsContainer.Img src={garage} />
										<HomeTextsContainer.Text>4 Garage</HomeTextsContainer.Text>
									</HomeTextsContainer.ImgText>
									<HomeTextsContainer.ImgText>
										<HomeTextsContainer.Img src={ruler} />
										<HomeTextsContainer.Text>
											1400 Sq Ft
										</HomeTextsContainer.Text>
									</HomeTextsContainer.ImgText>
								</HomeTextsContainer.ImgsContainer>
								<HomeTextsContainer.Price>$6,250/mo</HomeTextsContainer.Price>
								<Button width={"180px"}>Read more</Button>
							</HomeTextsContainer>
						</HomeTextsContainer.Wrapper>
					</div>
				</Carousel>
			</Container>
		</Wrapper>
	);
};

export default Carousel1;
