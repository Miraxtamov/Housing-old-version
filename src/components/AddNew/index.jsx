import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import mapMarker from "../../assets/icons/mapMarker.svg";
import {
	AddTitle,
	AmenitiesContainer,
	Container,
	InputsGlobalContainer,
	MediaImgWrapper,
	MediaSubTitle,
	NewPropertyContainer,
	NewSectionWrapper,
	Wrapper,
} from "./style";
import Button from "../Generic/Button";

const AddNew = () => {
	const [center, setCenter] = useState({
		lat: 41.2646,
		lng: 69.2163,
	});

	const containerStyle = {
		width: "100%",
		height: "480px",
	};

	const onClick = (e) => {
		setCenter({
			lat: e.latLng.lat(),
			lng: e.latLng.lng(),
		});
	};

	return (
		<Wrapper>
			<Container>
				<AddTitle>Add new property</AddTitle>
				<NewPropertyContainer>
					<NewSectionWrapper>
						<NewSectionWrapper.Title>
							Contact information
						</NewSectionWrapper.Title>
						<InputsGlobalContainer>
							<InputsGlobalContainer.Input
								placeholder="Property title*"
								type="text"
							/>
							<InputsGlobalContainer.Input placeholder="Type" type="text" />
						</InputsGlobalContainer>
						<InputsGlobalContainer mbn>
							<InputsGlobalContainer.Input
								mbm
								placeholder="Property Description*"
								type="text"
							/>
						</InputsGlobalContainer>
					</NewSectionWrapper>
					<NewSectionWrapper>
						<NewSectionWrapper.Title>Additional</NewSectionWrapper.Title>
						<InputsGlobalContainer>
							<InputsGlobalContainer.Input
								placeholder="Property title*"
								type="text"
							/>
							<InputsGlobalContainer.Select>
								<option value="Parent property">Parent property</option>
							</InputsGlobalContainer.Select>
							<InputsGlobalContainer.Select>
								<option value="Status">Status</option>
							</InputsGlobalContainer.Select>
						</InputsGlobalContainer>
						<InputsGlobalContainer>
							<InputsGlobalContainer.Input placeholder="Label" type="text" />
							<InputsGlobalContainer.Input placeholder="Material" type="text" />
							<InputsGlobalContainer.Input placeholder="Rooms" type="text" />
						</InputsGlobalContainer>
						<InputsGlobalContainer>
							<InputsGlobalContainer.Input placeholder="Beds" type="text" />
							<InputsGlobalContainer.Input placeholder="Baths" type="text" />
							<InputsGlobalContainer.Input placeholder="Garages" type="text" />
						</InputsGlobalContainer>
						<InputsGlobalContainer>
							<InputsGlobalContainer.Input
								placeholder="Year bulid"
								type="text"
							/>
							<InputsGlobalContainer.Input
								placeholder="Home area (sqft)"
								type="text"
							/>
							<InputsGlobalContainer.Input
								placeholder="Lot dimensions"
								type="text"
							/>
						</InputsGlobalContainer>
						<InputsGlobalContainer mbn>
							<InputsGlobalContainer.Input
								placeholder="Lot area (sqft)"
								type="text"
							/>
						</InputsGlobalContainer>
					</NewSectionWrapper>
					<NewSectionWrapper>
						<NewSectionWrapper.Title>Price</NewSectionWrapper.Title>
						<InputsGlobalContainer>
							<InputsGlobalContainer.Input
								type="text"
								placeholder="Price ($)"
							/>
							<InputsGlobalContainer.Input
								type="text"
								placeholder="Price Prefix"
							/>
						</InputsGlobalContainer>
						<InputsGlobalContainer mbn>
							<InputsGlobalContainer.Input
								type="text"
								placeholder="Price Suffix"
							/>
							<InputsGlobalContainer.Input
								type="text"
								placeholder="Price Custom"
							/>
						</InputsGlobalContainer>
					</NewSectionWrapper>
					<NewSectionWrapper>
						<NewSectionWrapper.Title>Location</NewSectionWrapper.Title>
						<InputsGlobalContainer>
							<InputsGlobalContainer.Select>
								<option value="Regions">Regions</option>
							</InputsGlobalContainer.Select>
							<InputsGlobalContainer.Input
								type="text"
								placeholder="Friendly address"
							/>
						</InputsGlobalContainer>
						<InputsGlobalContainer>
							<InputsGlobalContainer.Input
								type="text"
								placeholder="Map location"
							/>
						</InputsGlobalContainer>
						<InputsGlobalContainer style={{ gap: "0" }}>
							<LoadScript
								googleMapsApiKey="AIzaSyAkkKvMyf8Tk3Q8s7MWXin6njbtjIjq2S4"
								language="uz"
							>
								<GoogleMap
									onClick={onClick}
									mapContainerStyle={containerStyle}
									center={center}
									zoom={13}
								>
									<Marker icon={mapMarker} position={center} />
								</GoogleMap>
							</LoadScript>
						</InputsGlobalContainer>
						<InputsGlobalContainer mbn>
							<InputsGlobalContainer.Input type="text" placeholder="Latidude" />
							<InputsGlobalContainer.Input
								type="text"
								placeholder="Logtitude"
							/>
						</InputsGlobalContainer>
					</NewSectionWrapper>
					<NewSectionWrapper>
						<NewSectionWrapper.Title>Media</NewSectionWrapper.Title>
						<MediaSubTitle>Featured image</MediaSubTitle>
						<MediaImgWrapper>
							<MediaImgWrapper.Item />
							<MediaImgWrapper.Item />
							<MediaImgWrapper.Item />
							<MediaImgWrapper.Item />
						</MediaImgWrapper>
						<MediaImgWrapper.Button>Upload</MediaImgWrapper.Button>
						<MediaSubTitle mtn>Gallery</MediaSubTitle>
						<MediaImgWrapper.Button>Upload</MediaImgWrapper.Button>
						<MediaSubTitle>Attachment</MediaSubTitle>
						<MediaImgWrapper.DownloadName>
							<MediaImgWrapper.DownloadIcon />
							<MediaImgWrapper.DownName>
								test_property.pdf
							</MediaImgWrapper.DownName>
						</MediaImgWrapper.DownloadName>
						<MediaImgWrapper.Button>Upload</MediaImgWrapper.Button>
						<InputsGlobalContainer>
							<InputsGlobalContainer.Input
								type="text"
								placeholder="Video link"
							/>
						</InputsGlobalContainer>
						<InputsGlobalContainer mbn>
							<InputsGlobalContainer.Input
								mbm
								type="text"
								placeholder="Virtual tour"
							/>
						</InputsGlobalContainer>
					</NewSectionWrapper>
					<NewSectionWrapper>
						<NewSectionWrapper.Title>Amenities</NewSectionWrapper.Title>
						<AmenitiesContainer>
							<AmenitiesContainer.Col>
								<AmenitiesContainer.CheckName>
									<AmenitiesContainer.Check type="checkbox" id="air" />
									<AmenitiesContainer.Name htmlFor="air">
										Air conditioning
									</AmenitiesContainer.Name>
								</AmenitiesContainer.CheckName>
								<AmenitiesContainer.CheckName>
									<AmenitiesContainer.Check type="checkbox" id="barbeque" />
									<AmenitiesContainer.Name htmlFor="barbeque">
										Barbeque
									</AmenitiesContainer.Name>
								</AmenitiesContainer.CheckName>
								<AmenitiesContainer.CheckName>
									<AmenitiesContainer.Check type="checkbox" id="dryer" />
									<AmenitiesContainer.Name htmlFor="dryer">
										Dryer
									</AmenitiesContainer.Name>
								</AmenitiesContainer.CheckName>
								<AmenitiesContainer.CheckName>
									<AmenitiesContainer.Check type="checkbox" id="gym" />
									<AmenitiesContainer.Name htmlFor="gym">
										Gym
									</AmenitiesContainer.Name>
								</AmenitiesContainer.CheckName>
								<AmenitiesContainer.CheckName>
									<AmenitiesContainer.Check type="checkbox" id="laundry" />
									<AmenitiesContainer.Name htmlFor="laundry">
										Laundry
									</AmenitiesContainer.Name>
								</AmenitiesContainer.CheckName>
							</AmenitiesContainer.Col>
							<AmenitiesContainer.Col>
								<AmenitiesContainer.CheckName>
									<AmenitiesContainer.Check type="checkbox" id="lawn" />
									<AmenitiesContainer.Name htmlFor="lawn">
										Lawn
									</AmenitiesContainer.Name>
								</AmenitiesContainer.CheckName>
								<AmenitiesContainer.CheckName>
									<AmenitiesContainer.Check type="checkbox" id="microwave" />
									<AmenitiesContainer.Name htmlFor="microwave">
										Microwave
									</AmenitiesContainer.Name>
								</AmenitiesContainer.CheckName>
								<AmenitiesContainer.CheckName>
									<AmenitiesContainer.Check type="checkbox" id="outdoor" />
									<AmenitiesContainer.Name htmlFor="outdoor">
										Outdoor Shower
									</AmenitiesContainer.Name>
								</AmenitiesContainer.CheckName>
								<AmenitiesContainer.CheckName>
									<AmenitiesContainer.Check type="checkbox" id="refrigerator" />
									<AmenitiesContainer.Name htmlFor="refrigerator">
										Refrigerator
									</AmenitiesContainer.Name>
								</AmenitiesContainer.CheckName>
								<AmenitiesContainer.CheckName>
									<AmenitiesContainer.Check type="checkbox" id="stunning" />
									<AmenitiesContainer.Name htmlFor="stunning">
										Stunning views
									</AmenitiesContainer.Name>
								</AmenitiesContainer.CheckName>
							</AmenitiesContainer.Col>
							<AmenitiesContainer.Col>
								<AmenitiesContainer.CheckName>
									<AmenitiesContainer.Check type="checkbox" id="dining" />
									<AmenitiesContainer.Name htmlFor="dining">
										Dining Room
									</AmenitiesContainer.Name>
								</AmenitiesContainer.CheckName>
								<AmenitiesContainer.CheckName>
									<AmenitiesContainer.Check type="checkbox" id="fireplace" />
									<AmenitiesContainer.Name htmlFor="fireplace">
										Fireplace
									</AmenitiesContainer.Name>
								</AmenitiesContainer.CheckName>
								<AmenitiesContainer.CheckName>
									<AmenitiesContainer.Check type="checkbox" id="pets" />
									<AmenitiesContainer.Name htmlFor="pets">
										Pets Allowed
									</AmenitiesContainer.Name>
								</AmenitiesContainer.CheckName>
								<AmenitiesContainer.CheckName>
									<AmenitiesContainer.Check type="checkbox" id="unit" />
									<AmenitiesContainer.Name htmlFor="unit">
										Unit Washer/Dryer
									</AmenitiesContainer.Name>
								</AmenitiesContainer.CheckName>
								<AmenitiesContainer.CheckName>
									<AmenitiesContainer.Check type="checkbox" id="onsite" />
									<AmenitiesContainer.Name htmlFor="onsite">
										Onsite Parking
									</AmenitiesContainer.Name>
								</AmenitiesContainer.CheckName>
							</AmenitiesContainer.Col>
							<AmenitiesContainer.Col>
								<AmenitiesContainer.CheckName>
									<AmenitiesContainer.Check type="checkbox" id="waterfront" />
									<AmenitiesContainer.Name htmlFor="waterfront">
										Waterfront
									</AmenitiesContainer.Name>
								</AmenitiesContainer.CheckName>
								<AmenitiesContainer.CheckName>
									<AmenitiesContainer.Check type="checkbox" id="parking" />
									<AmenitiesContainer.Name htmlFor="parking">
										Parking
									</AmenitiesContainer.Name>
								</AmenitiesContainer.CheckName>
								<AmenitiesContainer.CheckName>
									<AmenitiesContainer.Check type="checkbox" id="doorman" />
									<AmenitiesContainer.Name htmlFor="doorman">
										Doorman
									</AmenitiesContainer.Name>
								</AmenitiesContainer.CheckName>
								<AmenitiesContainer.CheckName>
									<AmenitiesContainer.Check type="checkbox" id="heating" />
									<AmenitiesContainer.Name htmlFor="heating">
										Central Heating
									</AmenitiesContainer.Name>
								</AmenitiesContainer.CheckName>
								<AmenitiesContainer.CheckName>
									<AmenitiesContainer.Check type="checkbox" id="cleaning" />
									<AmenitiesContainer.Name htmlFor="cleaning">
										Cleaning Service
									</AmenitiesContainer.Name>
								</AmenitiesContainer.CheckName>
							</AmenitiesContainer.Col>
						</AmenitiesContainer>
					</NewSectionWrapper>
					<NewSectionWrapper>
						<NewSectionWrapper.Title>
							Select Energy Class
						</NewSectionWrapper.Title>
						<InputsGlobalContainer mbn>
							<InputsGlobalContainer.Input
								type="text"
								placeholder="Energy class"
							/>
							<InputsGlobalContainer.Input
								type="text"
								placeholder="Energy Index in kWh/m2a"
							/>
						</InputsGlobalContainer>
					</NewSectionWrapper>
					<NewPropertyContainer.Btn>
						<Button type="primary" width={"280px"}>
							Submit
						</Button>
					</NewPropertyContainer.Btn>
				</NewPropertyContainer>
			</Container>
		</Wrapper>
	);
};

export default AddNew;
