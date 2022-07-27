import React from "react";
import house from "../../../assets/imgs/house-home1.png";
import {
	Container,
	PhotoBoxContainer,
	PhotoLeftBox,
	PhotoRightBox,
	Wrapper,
} from "./style";

const PhotoBox = () => {
	return (
		<Container>
			<Wrapper>
				<PhotoBoxContainer>
					<PhotoLeftBox>
						<PhotoBoxContainer.Img src={house} />
					</PhotoLeftBox>
					<PhotoRightBox>
						<PhotoBoxContainer.Img src={house} />
						<PhotoBoxContainer.Img src={house} />
						<PhotoBoxContainer.Img src={house} />
						<PhotoBoxContainer.Img src={house} />
					</PhotoRightBox>
				</PhotoBoxContainer>
			</Wrapper>
		</Container>
	);
};

export default PhotoBox;
