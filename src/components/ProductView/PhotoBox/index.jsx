import React from "react";
import houseImg from "../../../assets/imgs/house-home1.png";
import noPicture from "../../../assets/imgs/nopicture.jpg";
import {
	Container,
	PhotoBoxContainer,
	PhotoLeftBox,
	PhotoRightBox,
	Wrapper,
} from "./style";

const PhotoBox = ({ house }) => {
	return (
		<Container>
			<Wrapper>
				<PhotoBoxContainer>
					<PhotoLeftBox>
						<PhotoBoxContainer.Img
							src={house?.attachments[0]?.imgPath || noPicture}
						/>
					</PhotoLeftBox>
					<PhotoRightBox>
						<PhotoBoxContainer.Img src={houseImg} />
						<PhotoBoxContainer.Img src={houseImg} />
						<PhotoBoxContainer.Img src={houseImg} />
						<PhotoBoxContainer.Img src={houseImg} />
					</PhotoRightBox>
				</PhotoBoxContainer>
			</Wrapper>
		</Container>
	);
};

export default PhotoBox;
