import React from "react";
import Features from "./Features";
import HouseOwner from "./HouseOwner";
import Location from "./Location";
import PropertyDetails from "./PropertyDetails";
import Reviews from "./Reviews";
import ScheduleATour from "./ScheduleATour";
import SimilarListings from "./SimilarListings";
import { Container, ProductViewLeft, Wrapper } from "./style";
import WriteReview from "./WriteReview";

const Main = ({ house }) => {
	console.log(house);
	return (
		<Container>
			<Wrapper>
				<ProductViewLeft>
					<ProductViewLeft.Wrapper>
						<ProductViewLeft.Title>
							Luxury Family Loft by Victoria Park {house?.address}
						</ProductViewLeft.Title>
						<ProductViewLeft.Wrapper>
							<ProductViewLeft.Icons>
								<ProductViewLeft.Icon bg>
									<ProductViewLeft.Share />
								</ProductViewLeft.Icon>
								<ProductViewLeft.Text>Share</ProductViewLeft.Text>
							</ProductViewLeft.Icons>
							<ProductViewLeft.Icons>
								<ProductViewLeft.Icon bg style={{ marginLeft: "26px" }}>
									<ProductViewLeft.Save />
								</ProductViewLeft.Icon>
								<ProductViewLeft.Text>Save</ProductViewLeft.Text>
							</ProductViewLeft.Icons>
						</ProductViewLeft.Wrapper>
					</ProductViewLeft.Wrapper>
					<ProductViewLeft.Wrapper>
						<ProductViewLeft.Description>
							Quincy St, Brooklyn, NY, USA
						</ProductViewLeft.Description>
						<ProductViewLeft.Wrapper>
							<ProductViewLeft.Sale>$2,800/mo</ProductViewLeft.Sale>
							<ProductViewLeft.Price>$7,500/mo</ProductViewLeft.Price>
						</ProductViewLeft.Wrapper>
					</ProductViewLeft.Wrapper>

					<ProductViewLeft.Wrapper>
						<ProductViewLeft.Wrapper>
							<ProductViewLeft.Icons>
								<ProductViewLeft.Bed />
								<ProductViewLeft.Text>
									{house?.houseDetails?.bed || 0} Beds
								</ProductViewLeft.Text>
								<ProductViewLeft.Bath style={{ marginLeft: "24px" }} />
								<ProductViewLeft.Text>
									{house?.houseDetails?.bath || 0} Beds
								</ProductViewLeft.Text>
								<ProductViewLeft.Garage style={{ marginLeft: "24px" }} />
								<ProductViewLeft.Text>
									{house?.houseDetails?.garage || 0} Beds
								</ProductViewLeft.Text>
								<ProductViewLeft.Ruler style={{ marginLeft: "24px" }} />
								<ProductViewLeft.Text>
									{house?.houseDetails?.area || 0} Beds
								</ProductViewLeft.Text>
								<ProductViewLeft.Calendar style={{ marginLeft: "24px" }} />
								<ProductViewLeft.Text>
									{house?.houseDetails?.bed || 0} Beds
								</ProductViewLeft.Text>
							</ProductViewLeft.Icons>
						</ProductViewLeft.Wrapper>
						<ProductViewLeft.Text>Est. Mortgage</ProductViewLeft.Text>
					</ProductViewLeft.Wrapper>
					<ProductViewLeft.SubTitle>Description</ProductViewLeft.SubTitle>
					<ProductViewLeft.SubDescription>
						Occupying over 8,000 square feet, perched over 1,100 feet in the air
						with breathtaking panoramic 360-degree views of all of New York City
						and the surrounding tri-state area, The 82nd Floor at 432 Park
						Avenue has been completely reimagined by one of the most
						sought-after design houses in London and represents an utterly
						unique opportunity to own a grobally significant property
					</ProductViewLeft.SubDescription>
					<ProductViewLeft.ShowMoreBtn>Show more</ProductViewLeft.ShowMoreBtn>
					{/* Documents */}
					<ProductViewLeft.SubTitle>Documents</ProductViewLeft.SubTitle>
					<ProductViewLeft.Wrapper>
						<ProductViewLeft.Wrapper>
							<ProductViewLeft.DownloadIcon />
							<ProductViewLeft.DownloadName>
								test_property.pdf
							</ProductViewLeft.DownloadName>
							<ProductViewLeft.DownloadText>
								DOWNLOAD
							</ProductViewLeft.DownloadText>
						</ProductViewLeft.Wrapper>
						<ProductViewLeft.Wrapper>
							<ProductViewLeft.DownloadIcon />
							<ProductViewLeft.DownloadName>
								test_property.pdf
							</ProductViewLeft.DownloadName>
							<ProductViewLeft.DownloadText>
								DOWNLOAD
							</ProductViewLeft.DownloadText>
						</ProductViewLeft.Wrapper>
						<ProductViewLeft.Wrapper>
							<ProductViewLeft.DownloadIcon />
							<ProductViewLeft.DownloadName>
								test_property.pdf
							</ProductViewLeft.DownloadName>
							<ProductViewLeft.DownloadText>
								DOWNLOAD
							</ProductViewLeft.DownloadText>
						</ProductViewLeft.Wrapper>
					</ProductViewLeft.Wrapper>
					<ProductViewLeft.Line />

					{/* Location */}
					<Location house={house} />
					<ProductViewLeft.Line />

					{/* Property Details */}
					<PropertyDetails house={house} />
					<ProductViewLeft.Line />

					{/* Features */}
					<Features />
					<ProductViewLeft.Line />

					{/* Schedule A Tour */}
					<ScheduleATour />
					<ProductViewLeft.Line />

					{/* Reviews */}
					<Reviews />
					<ProductViewLeft.Line />

					{/* Write a Review */}
					<WriteReview />

					{/* Similar Listings */}
					<SimilarListings />
				</ProductViewLeft>
				<ProductViewLeft.Right>
					<HouseOwner />
				</ProductViewLeft.Right>
			</Wrapper>
		</Container>
	);
};

export default Main;
