import React, { useState } from "react";
import {
	Container,
	FilterButtonImg,
	FilterSearchButtons,
	FilterSearchButtonsSearch,
	FilterSearchContainer,
	FilterSearchInput,
	FilterSearchInputContainer,
} from "./style";
import inputHome from "../../assets/icons/inputHome.svg";
import price from "../../assets/icons/price.svg";
import status from "../../assets/icons/status.svg";
import filter from "../../assets/icons/filter.svg";
import search from "../../assets/icons/search.svg";

import AdvancedModal from "../AdvancedModal";

const FilterSearchButton = () => {
	const [openModal, setOpenModal] = useState(false);

	const openModalBtn = () => {
		setOpenModal({ openModal: !openModal });
	};

	return (
		<Container>
			<FilterSearchContainer>
				<FilterSearchInputContainer>
					<FilterSearchInput.Img src={inputHome} alt="Input Home" />
					<FilterSearchInput placeholder="Enter an address, neighborhood, city, or ZIP code" />
				</FilterSearchInputContainer>
				<FilterSearchButtons>
					<FilterButtonImg src={status} alt="Status Icon" />
					Status
				</FilterSearchButtons>
				<FilterSearchButtons>
					<FilterButtonImg src={price} alt="Price Icon" />
					Price
				</FilterSearchButtons>
				<FilterSearchButtons onClick={openModalBtn}>
					<FilterButtonImg src={filter} alt="Filter Icon" />
					Advanced
				</FilterSearchButtons>
				<FilterSearchButtonsSearch>
					<FilterButtonImg src={search} alt="Search Icon" />
					Search
				</FilterSearchButtonsSearch>
			</FilterSearchContainer>
			{openModal && <AdvancedModal closeModal={setOpenModal} />}
		</Container>
	);
};

export default FilterSearchButton;
