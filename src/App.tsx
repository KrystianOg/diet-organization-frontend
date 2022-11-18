import { Routes, Route } from "react-router-dom";
// import { gapi } from "gapi-script";
import "./App.css";
import {
	Home,
	SignIn,
	SignUp,
	NotFound,
	Profile,
	Recipes,
	Calendar,
	Planner,
	SendVerify,
	Verify,
	InformationSetup,
} from "./pages";
import { Loading } from "./components";
import { Suspense } from "react";
import { CssBaseline } from "@mui/material";

function App() {
	// some google api stuff in the beginning
	return (
		<>
			<CssBaseline />
			<Suspense fallback={<Loading />}>
				<Routes>
					{/* public routes */}
					<Route path="/" element={<Home />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/signup" element={<SignUp />} />
					{/* private routes */}
					<Route path="/verify/send" element={<SendVerify />} />
					<Route
						path="/verify/:hash/:confirmation_token"
						element={<Verify />}
					/>
					<Route path="/setup-information" element={<InformationSetup />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/recipes" element={<Recipes />} />
					<Route path="/calendar" element={<Calendar />} />
					<Route path="/planner" element={<Planner />} />

					{/* 404 */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Suspense>
		</>
	);
}

export default App;
