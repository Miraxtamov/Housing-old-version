import styled from "styled-components";
import { ReactComponent as download } from "../../assets/icons/downloadIcon.svg";

export const Wrapper = styled.div`
	width: 100%;
`;

export const Container = styled.div`
	width: 100%;
	max-width: 1440px;
	margin-left: auto;
	margin-right: auto;
	padding-left: 130px;
	padding-right: 130px;
`;

export const AddTitle = styled.div`
	color: var(--primaryColor);
	letter-spacing: -0.02em;
	font-weight: 600;
	font-size: 28px;
	line-height: 36px;
	margin-top: 34px;
	margin-bottom: 32px;
`;

export const NewPropertyContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
`;

export const NewSectionWrapper = styled.div`
	background: var(--defaultColor);
	border: 1px solid #e6e9ec;
	box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
	border-radius: 3px;
	padding: 24px 30px 48px 30px;
`;

NewSectionWrapper.Title = styled.div`
	color: var(--primaryColor);
	font-weight: 600;
	font-size: 18px;
	line-height: 28px;
	margin-bottom: 40px;
`;

export const InputsGlobalContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	gap: 20px;
	margin-bottom: ${(props) => (props.mbn ? "0" : "44px")};
`;

InputsGlobalContainer.Input = styled.input`
	width: 100%;
	border: none;
	outline: none;
	border-bottom: 2px solid #e6e9ec;
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	color: var(--primaryColor);
	padding-top: 4px;
	padding-bottom: ${(props) => (props.mbm ? "64px" : "4px")};

	::placeholder {
		color: var(--secondaryColor);
	}

	&:focus {
		border-bottom: 2px solid var(--activeColor);
	}
`;

InputsGlobalContainer.Select = styled.select`
	width: 100%;
	border: none;
	outline: none;
	border-bottom: 2px solid #e6e9ec;
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	color: var(--secondaryColor);
	padding-top: 4px;
	padding-bottom: 4px;
`;

export const MediaSubTitle = styled.div`
	color: var(--primaryColor);
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	margin-bottom: ${(props) => (props.mtn ? "0" : "16px")};
`;

export const MediaImgWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;

MediaImgWrapper.Item = styled.div`
	width: 150px;
	height: 150px;
	background: #c4c4c4;
	border-radius: 3px;
`;

MediaImgWrapper.Button = styled.button`
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	border: 1px solid var(--activeColor);
	border-radius: 2px;
	align-items: center;
	margin-top: 24px;
	margin-bottom: 44px;
	padding: 12px 40px;
	color: var(--activeColor);
	background-color: var(--defaultColor);
	cursor: pointer;
`;

MediaImgWrapper.DownloadName = styled.div`
	display: flex;
	align-items: center;
`;

MediaImgWrapper.DownloadIcon = styled(download)``;

MediaImgWrapper.DownName = styled.div`
	font-size: 14px;
	color: var(--secondaryColor);
	line-height: 20px;
	font-weight: 400;
	margin-left: 8px;
`;

export const AmenitiesContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

AmenitiesContainer.Col = styled.div`
	display: flex;
	flex-direction: column;
	gap: 25px;
`;

AmenitiesContainer.CheckName = styled.div`
	display: flex;
	align-items: center;
`;

AmenitiesContainer.Check = styled.input`
	border: 2px solid #e6e9ec;
	background-color: var(--defaultColor);
	width: 18px;
	height: 18px;

	&:checked {
		color: var(--activeColor);
		border: 2px solid var(--activeColor);
	}
`;

AmenitiesContainer.Name = styled.label`
	font-size: 14px;
	font-weight: 400;
	line-height: 20px;
	color: var(--secondaryColor);
	margin-left: 12px;
`;

NewPropertyContainer.Btn = styled.div`
	margin-left: auto;
	margin-bottom: 96px;
`;
