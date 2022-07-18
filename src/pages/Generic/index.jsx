import React from "react";

const Generic = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				minHeight: "80vh",
				alignItems: "center",
			}}
		>
			<h1>{window.location.pathname} coming soon...</h1>
		</div>
	);
};

export default Generic;
