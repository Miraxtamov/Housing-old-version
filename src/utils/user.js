import Favourite from "../components/Favourite";
import MyProperties from "../components/MyProperties";
import Generic from "../pages/Generic";

export const user = [
	{ id: 1, title: "My profile", path: "/profile", element: <Generic /> },
	{
		id: 2,
		title: "My Properties",
		path: "/myproperties",
		element: <MyProperties />,
	},
	{ id: 3, title: "Favourites", path: "/favourites", element: <Favourite /> },
];
