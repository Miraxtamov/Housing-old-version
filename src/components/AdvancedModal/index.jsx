import React from "react";
import Button from "../Generic/Button";
import Input from "../Generic/Input";
import {
	ModalAddressContainer,
	ModalButtonContainer,
	ModalContainer,
} from "./style";

const AdvancedModal = () => {
	return (
		<ModalContainer>
			<ModalContainer.Title>Address</ModalContainer.Title>
			<ModalAddressContainer>
				<Input width={"100%"} placeholder="Country" />
				<Input width={"100%"} placeholder="Region" />
				<Input width={"100%"} placeholder="City" />
				<Input width={"100%"} placeholder="Zip code" />
			</ModalAddressContainer>
			<ModalContainer.Title>Apartment info</ModalContainer.Title>
			<ModalAddressContainer>
				<Input width={"100%"} placeholder="Rooms" />
				<Input width={"100%"} placeholder="Size" />
				<Input width={"100%"} placeholder="Sort" />
			</ModalAddressContainer>
			<ModalContainer.Title>Price</ModalContainer.Title>
			<ModalAddressContainer>
				<Input width={"100%"} placeholder="Mix price" />
				<Input width={"100%"} placeholder="Min price" />
			</ModalAddressContainer>
			<ModalButtonContainer>
				<Button type={"secondary"} width={"131px"}>
					Cancel
				</Button>
				<Button mr={"15"} type={"primary"} width={"131px"}>
					Submit
				</Button>
			</ModalButtonContainer>
		</ModalContainer>
	);
};

export default AdvancedModal;
