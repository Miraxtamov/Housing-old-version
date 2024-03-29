import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "antd/dist/antd.css";
import "react-toastify/dist/ReactToastify.css";
import "react-alice-carousel/lib/alice-carousel.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Root from "./root";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
	<>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Root />
			</BrowserRouter>
		</QueryClientProvider>
	</>
	// </React.StrictMode>
);
