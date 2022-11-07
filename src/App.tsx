import { Routes, Route } from "react-router-dom";
// import { gapi } from "gapi-script";
import "./App.css";
import {
	Home,
	Login,
	NotFound,
	Register,
	Profile,
	Recipes,
	Calendar,
	Planner,
} from "./pages";
import { Loading } from "./components";
import { Suspense } from "react";
import { CssBaseline } from "@mui/material";

function App() {
	// some google api stuff in the beginning
	return (
		<Suspense fallback={<Loading />}>
			<CssBaseline />
			<Routes>
				{/* public routes */}
				<Route path="/" element={<Home />} />
				<Route path="/signin" element={<Login />} />
				<Route path="/signup" element={<Register />} />
				{/* private routes */}
				<Route path="/profile" element={<Profile />} />
				<Route path="/recipes" element={<Recipes />} />
				<Route path="/calendar" element={<Calendar />} />
				<Route path="/planner" element={<Planner />} />

				{/* 404 */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Suspense>
	);
}

export default App;
