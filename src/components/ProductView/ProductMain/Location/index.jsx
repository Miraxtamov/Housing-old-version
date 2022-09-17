import React, { useState } from "react";
import mapMarker from "../../../../assets/icons/mapMarker.svg";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Container, Description, Row, Subtitle, Title } from "./style";

const Location = ({ house }) => {
	const [center, setCenter] = useState({
		lat: 41.2646,
		lng: 69.2163,
	});
	const containerStyle = {
		width: "100%",
		height: "416px",
	};

	const onClick = (e) => {
		setCenter({
			lat: e.latLng.lat(),
			lng: e.latLng.lng(),
		});
	};

	console.log(house);
	console.log(house?.location?.latitude.toString()[2]);
	return (
		<Container>
			<Title>Location</Title>
			<Row>
				<Row.Item>
					<Subtitle>Address:</Subtitle>
					<Description>{house?.address}</Description>
				</Row.Item>
				<Row.Item>
					<Subtitle>City:</Subtitle>
					<Description>{house?.city}</Description>
				</Row.Item>
				<Row.Item>
					<Subtitle>Area:</Subtitle>
					<Description>{house?.area || "0"}</Description>
				</Row.Item>
			</Row>
			<Row style={{ marginTop: "24px", marginBottom: "24px" }}>
				<Row.Item>
					<Subtitle>State/County:</Subtitle>
					<Description>{house?.country}</Description>
				</Row.Item>
				<Row.Item>
					<Subtitle>Zip:</Subtitle>
					<Description>{house?.zipCode}</Description>
				</Row.Item>
				<Row.Item>
					<Subtitle>Country:</Subtitle>
					<Description>{house?.country}</Description>
				</Row.Item>
			</Row>
			{/* Google Map */}
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
		</Container>
	);
};

export default Location;
