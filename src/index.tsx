import React from "react";
import ReactDOM from "react-dom/client";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { useChainProviders } from "react-flat-providers";
import { SnackbarProvider } from "notistack";
import { HelmetProvider } from "react-helmet-async";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./app/store";

if (process.env.NODE_ENV === "production") {
	disableReactDevTools();
}

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

// using chain providers to prevent deep providers nesting
const ChainedProviders = useChainProviders()
	.add(React.StrictMode)
	.add(ReduxProvider, { store: store })
	.add(HelmetProvider)
	.add(SnackbarProvider)
	.add(BrowserRouter)
	.make();

root.render(
	<ChainedProviders>
		<App />
	</ChainedProviders>
);
