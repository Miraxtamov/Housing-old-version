import Home from "../components/Home";
import Generic from "../pages/Generic";

export const navbar = [
	{ id: 1, title: "Home", path: "/home", element: <Home /> },
	{
		id: 2,
		title: "Properties",
		path: "/properties",
		element: <Generic />,
	},
	{ id: 3, title: "Contacts", path: "/contacts", element: <Generic /> },
];
