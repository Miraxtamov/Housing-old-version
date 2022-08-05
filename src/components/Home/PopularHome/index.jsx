import React from "react";
import PopularHomeImg from "../../../assets/imgs/house-home2.png";
import Button from "../../Generic/Button";
import { Container, TextsBtnImg, Wrapper } from "./style";

const PopularHome = () => {
	return (
		<Wrapper>
			<Container>
				<TextsBtnImg>
					<TextsBtnImg.Img src={PopularHomeImg} />
					<TextsBtnImg.TextsBtn>
						<TextsBtnImg.Texts>
							Vermont Farmhouse With Antique Jail Is the Week's Most Popular
							Home
						</TextsBtnImg.Texts>
						<Button width={"180px"} type={"primary"}>
							Read more
						</Button>
					</TextsBtnImg.TextsBtn>
				</TextsBtnImg>
			</Container>
		</Wrapper>
	);
};

export default PopularHome;
