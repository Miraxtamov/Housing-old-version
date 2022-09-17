import React, { useState } from "react";
import { useQuery } from "react-query";
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

	useQuery("addPost", () => {
		return fetch(`https://houzing-app.herokuapp.com/api/v1/houses`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
				"Content-type": "application/json",
			},
			body: JSON.ify({
				address: "",
				attachments: [
					{
						imgPath: "",
					},
				],
				categoryId: 0,
				city: "",
				componentsDto: {
					additional: "",
					airCondition: true,
					courtyard: true,
					furniture: true,
					gasStove: true,
					internet: true,
					tv: true,
				},
				country: "",
				description: "",
				homeAmenitiesDto: {
					additional: "",
					busStop: true,
					garden: true,
					market: true,
					park: true,
					parking: true,
					school: true,
					stadium: true,
					subway: true,
					superMarket: true,
				},
				houseDetails: {
					area: 0,
					bath: 0,
					beds: 0,
					garage: 0,
					room: 0,
					yearBuilt: 0,
				},
				locations: {
					latitude: 0,
					longitude: 0,
				},
				name: "",
				price: 0,
				region: "",
				salePrice: 0,
				status: true,
				zipCode: "",
			}),
		}).then((res) => res.json().then((err) => console.warn(err)));
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

	const onChange = () => {};

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
								onChange={onChange}
								placeholder="Property title*"
								type="text"
							/>
							<InputsGlobalContainer.Input
								onChange={onChange}
								placeholder="Type"
								type="text"
							/>
						</InputsGlobalContainer>
						<InputsGlobalContainer mbn>
							<InputsGlobalContainer.Input
								onChange={onChange}
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
								onChange={onChange}
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
							<InputsGlobalContainer.Input
								onChange={onChange}
								placeholder="Label"
								type="text"
							/>
							<InputsGlobalContainer.Input
								onChange={onChange}
								placeholder="Material"
								type="text"
							/>
							<InputsGlobalContainer.Input
								onChange={onChange}
								placeholder="Rooms"
								type="text"
							/>
						</InputsGlobalContainer>
						<InputsGlobalContainer>
							<InputsGlobalContainer.Input
								onChange={onChange}
								placeholder="Beds"
								type="text"
							/>
							<InputsGlobalContainer.Input
								onChange={onChange}
								placeholder="Baths"
								type="text"
							/>
							<InputsGlobalContainer.Input
								onChange={onChange}
								placeholder="Garages"
								type="text"
							/>
						</InputsGlobalContainer>
						<InputsGlobalContainer>
							<InputsGlobalContainer.Input
								onChange={onChange}
								placeholder="Year bulid"
								type="text"
							/>
							<InputsGlobalContainer.Input
								onChange={onChange}
								placeholder="Home area (sqft)"
								type="text"
							/>
							<InputsGlobalContainer.Input
								onChange={onChange}
								placeholder="Lot dimensions"
								type="text"
							/>
						</InputsGlobalContainer>
						<InputsGlobalContainer mbn>
							<InputsGlobalContainer.Input
								onChange={onChange}
								placeholder="Lot area (sqft)"
								type="text"
							/>
						</InputsGlobalContainer>
					</NewSectionWrapper>
					<NewSectionWrapper>
						<NewSectionWrapper.Title>Price</NewSectionWrapper.Title>
						<InputsGlobalContainer>
							<InputsGlobalContainer.Input
								onChange={onChange}
								type="text"
								placeholder="Price ($)"
							/>
							<InputsGlobalContainer.Input
								onChange={onChange}
								type="text"
								placeholder="Price Prefix"
							/>
						</InputsGlobalContainer>
						<InputsGlobalContainer mbn>
							<InputsGlobalContainer.Input
								onChange={onChange}
								type="text"
								placeholder="Price Suffix"
							/>
							<InputsGlobalContainer.Input
								onChange={onChange}
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
								onChange={onChange}
								type="text"
								placeholder="Friendly address"
							/>
						</InputsGlobalContainer>
						<InputsGlobalContainer>
							<InputsGlobalContainer.Input
								onChange={onChange}
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
							<InputsGlobalContainer.Input
								onChange={onChange}
								type="text"
								placeholder="Latidude"
							/>
							<InputsGlobalContainer.Input
								onChange={onChange}
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
								onChange={onChange}
								type="text"
								placeholder="Video link"
							/>
						</InputsGlobalContainer>
						<InputsGlobalContainer mbn>
							<InputsGlobalContainer.Input
								onChange={onChange}
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
								onChange={onChange}
								type="text"
								placeholder="Energy class"
							/>
							<InputsGlobalContainer.Input
								onChange={onChange}
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
