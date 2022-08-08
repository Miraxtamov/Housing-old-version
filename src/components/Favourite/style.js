import styled from "styled-components";

export const Container = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	padding-right: 130px;
	padding-left: 130px;

	@media (max-width: 768px) {
		padding: 0;
	}
`;

Container.Title = styled.div`
	margin-top: 64px;
`;

Container.Description = styled.div`
	margin-bottom: 64px;
`;

export const CardContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
	z-index: 0;
	margin-bottom: 96px;

	@media (max-width: 768px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
