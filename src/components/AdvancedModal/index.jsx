import React from "react";
import {
	ModalAddressContainer,
	ModalButtonContainer,
	ModalContainer,
} from "./style";

const AdvancedModal = ({ closeModal }) => {
	return (
		<div>
			<ModalContainer>
				<ModalContainer.Title>Address</ModalContainer.Title>
				<ModalAddressContainer>
					<ModalAddressContainer.ModalAddressInput
						firstML
						placeholder="Country"
					/>
					<ModalAddressContainer.ModalAddressInput placeholder="Region" />
					<ModalAddressContainer.ModalAddressInput placeholder="City" />
					<ModalAddressContainer.ModalAddressInput placeholder="Zip code" />
				</ModalAddressContainer>
				<ModalContainer.Title>Apartment info</ModalContainer.Title>
				<ModalAddressContainer>
					<ModalAddressContainer.ModalAddressInput
						firstML
						placeholder="Rooms"
					/>
					<ModalAddressContainer.ModalAddressInput placeholder="Size" />
					<ModalAddressContainer.ModalAddressInput placeholder="Sort" />
				</ModalAddressContainer>
				<ModalContainer.Title>Price</ModalContainer.Title>
				<ModalAddressContainer>
					<ModalAddressContainer.ModalAddressInput
						firstML
						placeholder="Mix price"
					/>
					<ModalAddressContainer.ModalAddressInput placeholder="Min price" />
				</ModalAddressContainer>
				<ModalButtonContainer>
					<ModalButtonContainer.ModalCancelButton
						onClick={() => closeModal(false)}
					>
						Cancel
					</ModalButtonContainer.ModalCancelButton>
					<ModalButtonContainer.ModalSubmitButton>
						Submit
					</ModalButtonContainer.ModalSubmitButton>
				</ModalButtonContainer>
			</ModalContainer>
		</div>
	);
};

export default AdvancedModal;
