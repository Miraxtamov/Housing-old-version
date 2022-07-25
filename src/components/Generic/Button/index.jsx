import React, { memo } from "react";
import { Container } from "./style";

export const ButtonGeneric = ({
	children,
	onClick,
	height,
	width,
	type,
	mr,
	ml,
	mb,
	mt,
	pr,
	pl,
	pb,
	pt,
}) => {
	return (
		<Container
			mr={mr}
			ml={ml}
			mb={mb}
			mt={mt}
			pr={pr}
			pl={pl}
			pb={pb}
			pt={pt}
			type={type}
			width={width}
			height={height}
			onClick={onClick}
			children={children}
		>
			{children}
		</Container>
	);
};

export default memo(ButtonGeneric);
