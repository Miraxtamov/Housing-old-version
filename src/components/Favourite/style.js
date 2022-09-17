import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	max-width: 1220px;
	margin-left: auto;
	margin-right: auto;
	padding-right: 90px;
	padding-left: 90px;

	.favourite-center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

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
	/* width: 100%; */
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
	z-index: 0;
	margin-bottom: 96px;

	@media (max-width: 768px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
