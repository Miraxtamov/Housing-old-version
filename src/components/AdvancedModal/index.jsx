import React from "react";
import { useNavigate } from "react-router-dom";
import UseReplace from "../../hooks/useReplace";
import useSearch from "../../hooks/useSearch";
import Button from "../Generic/Button";
import Input from "../Generic/Input";
import {
	ModalAddressContainer,
	ModalButtonContainer,
	ModalContainer,
} from "./style";

const AdvancedModal = () => {
	const navigate = useNavigate();
	const query = useSearch();

	const onChange = ({ target }) => {
		const { name, value } = target;
		navigate(UseReplace(name, value));
	};

	return (
		<ModalContainer>
			<ModalContainer.Title>Address</ModalContainer.Title>
			<ModalAddressContainer>
				<Input
					onChange={onChange}
					width={"100%"}
					name="country"
					placeholder="Country"
				/>
				<Input
					onChange={onChange}
					width={"100%"}
					name="region"
					placeholder="Region"
				/>
				<Input
					onChange={onChange}
					width={"100%"}
					name="city"
					placeholder="City"
				/>
				<Input
					onChange={onChange}
					width={"100%"}
					name="zip-code"
					placeholder="Zip code"
				/>
			</ModalAddressContainer>
			<ModalContainer.Title>Apartment info</ModalContainer.Title>
			<ModalAddressContainer>
				<Input
					onChange={onChange}
					width={"100%"}
					name="rooms"
					placeholder="Rooms"
				/>
				<Input
					onChange={onChange}
					width={"100%"}
					name="size"
					placeholder="Size"
				/>
				<Input
					onChange={onChange}
					width={"100%"}
					name="sort"
					placeholder="Sort"
				/>
			</ModalAddressContainer>
			<ModalContainer.Title>Price</ModalContainer.Title>
			<ModalAddressContainer>
				<Input
					onChange={onChange}
					width={"100%"}
					name="mix-price"
					placeholder="Mix price"
				/>
				<Input
					onChange={onChange}
					width={"100%"}
					name="min-price"
					placeholder="Min price"
				/>
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
