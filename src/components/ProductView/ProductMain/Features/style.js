import styled from "styled-components";
import { ReactComponent as airConditioner } from "../../../../assets/icons/airConditioner.svg";
import { ReactComponent as barbeque } from "../../../../assets/icons/barbecue.svg";
import { ReactComponent as dryer } from "../../../../assets/icons/dryer.svg";
import { ReactComponent as dumbbell } from "../../../../assets/icons/dumbbell.svg";
import { ReactComponent as lawn } from "../../../../assets/icons/lawn.svg";
import { ReactComponent as laundry } from "../../../../assets/icons/laundry.svg";
import { ReactComponent as microwave } from "../../../../assets/icons/microwave.svg";
import { ReactComponent as outdoor } from "../../../../assets/icons/outdoor.svg";
import { ReactComponent as refrigerator } from "../../../../assets/icons/refrigerator.svg";
import { ReactComponent as sauna } from "../../../../assets/icons/sauna.svg";
import { ReactComponent as swimmer } from "../../../../assets/icons/swimmer.svg";
import { ReactComponent as tvcable } from "../../../../assets/icons/tvcable.svg";
import { ReactComponent as liquidSoap } from "../../../../assets/icons/liquidSoap.svg";
import { ReactComponent as wifi } from "../../../../assets/icons/wifi.svg";
import { ReactComponent as blinds } from "../../../../assets/icons/blinds.svg";
import { ReactComponent as chair } from "../../../../assets/icons/chair.svg";

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const Title = styled.div`
	color: var(--primaryColor);
	margin-bottom: 24px;
	font-weight: 600;
	font-size: 18px;
	line-height: 22px;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 30px 0;
`;

Wrapper.Box = styled.div`
	width: 25%;
	display: flex;
	align-items: center;
	gap: 10px;
`;

export const SubTitle = styled.div`
	color: var(--secondaryColor);
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
`;

export const Icons = styled.div``;

Icons.Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 35px;
	height: 35px;
	background: #f6f8f9;
	border-radius: 50%;
`;

Icons.Airconditioner = styled(airConditioner)``;
Icons.Barbecue = styled(barbeque)``;
Icons.Dryer = styled(dryer)``;
Icons.Gym = styled(dumbbell)``;
Icons.Lawn = styled(lawn)``;
Icons.Laundry = styled(laundry)``;
Icons.Microwave = styled(microwave)``;
Icons.Outdoor = styled(outdoor)``;
Icons.Refrigerator = styled(refrigerator)``;
Icons.Sauna = styled(sauna)``;
Icons.Swimmer = styled(swimmer)``;
Icons.Coaxial = styled(tvcable)``;
Icons.Liquid = styled(liquidSoap)``;
Icons.Wifi = styled(wifi)``;
Icons.Chair = styled(chair)``;
Icons.Blinds = styled(blinds)``;
