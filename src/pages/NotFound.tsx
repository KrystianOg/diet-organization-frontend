import { Stack, Button, styled } from "@mui/material";
import avocatoLight404 from "../animations/404-avocado.json";
import { StyledLottie } from "../components";
import { NavLink, useLocation } from "react-router-dom";

const StyledNav = styled(NavLink)`
	text-decoration: none;
`;
const NotFound = () => {
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	return (
		<Stack
			component="main"
			maxWidth="xs"
			sx={{ height: "100vh", width: "100vw" }}
			alignItems="center"
			justifyContent="center"
		>
			<StyledLottie animationData={avocatoLight404} />

			<StyledNav to={from} replace>
				<Button variant="contained" sx={{ borderRadius: "50px" }}>
					GO BACK
				</Button>
			</StyledNav>
		</Stack>
	);
};

export default NotFound;
