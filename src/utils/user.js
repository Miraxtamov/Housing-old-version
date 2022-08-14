import Favourite from "../components/Favourite";
import MyProfile from "../components/MyProfile";
import MyProperties from "../components/MyProperties";

export const user = [
	{ id: 1, title: "My profile", path: "/profile", element: <MyProfile /> },
	{
		id: 2,
		title: "My Properties",
		path: "/myproperties",
		element: <MyProperties />,
	},
	{ id: 3, title: "Favourites", path: "/favourites", element: <Favourite /> },
];
