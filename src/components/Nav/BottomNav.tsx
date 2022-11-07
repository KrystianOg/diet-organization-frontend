import { useState } from "react";
import { StickBottomNavigation, StyledBottomNA } from "./NavComponents";
import { styled } from "@mui/material";
import { Event, MenuBook, Person } from "@mui/icons-material";
import { ReactComponent as Carrot } from "../../animations/carrot.svg";
import { useNavigate } from "react-router-dom";

const MCarrot = styled(Carrot)(({ theme }) => ({
	fill: theme.palette.primary.main,
	transform: "rotate(45deg)",
}));

const BottomNav = () => {
	const navigate = useNavigate();
	const [authenticated, setAuthenticated] = useState<boolean>(true);
	return (
		<StickBottomNavigation>
			<StyledBottomNA
				aria-label="Planner"
				icon={<MCarrot width="40px" />}
				onClick={() => navigate("/planner")}
			/>
			<StyledBottomNA
				label="Calendar"
				value="calendar"
				icon={<Event />}
				onClick={() => navigate("/calendar")}
			/>
			<StyledBottomNA
				label="Recipes"
				value="recipes"
				icon={<MenuBook />}
				onClick={() => navigate("/recipes")}
			/>
			{/* TODO: on login set avatar */}
			<StyledBottomNA
				label="Profile"
				value="profile"
				icon={<Person />}
				onClick={() => navigate("/profile")}
			/>
		</StickBottomNavigation>
	);
};

export default BottomNav;
