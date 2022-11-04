import { Routes, Route } from "react-router-dom";
// import { gapi } from "gapi-script";
import "./App.css";
import { Home, Login, NotFound, Register } from "./pages";

function App() {
	// some google api stuff in the beginning

	return (
		<Routes>
			{/* public routes */}
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			{/* private routes */}

			{/* catch all */}
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
