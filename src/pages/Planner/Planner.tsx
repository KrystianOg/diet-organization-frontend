import { useState } from "react";
import { BottomNav } from "../../components";
import { Container, Tabs, Tab } from "@mui/material";
import { ModelTraining } from "@mui/icons-material";
import MealsStepper from "./MealsStepper";
import { Fab } from "../../components";
import dayjs, { Dayjs } from "dayjs";

const days = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday",
];

const Planner = () => {
	const today = dayjs().day() - 1;
	const [tab, setTab] = useState<number>(today >= 0 ? today : 6);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setTab(newValue);
	};

	const generateDayPlan = () => {
		console.log("generate day plan");
	};

	return (
		<Container>
			<Tabs
				value={tab}
				onChange={handleChange}
				indicatorColor="primary"
				textColor="primary"
				aria-label="disabled tabs example"
				variant="scrollable"
				scrollButtons="auto"
			>
				{days.map((day, index) => (
					<Tab label={day} value={index} key={index} />
				))}
			</Tabs>
			<MealsStepper sx={{ margin: "8px" }} />
			<Fab
				sx={{ bottom: 72, top: "auto", ariaLabel: "Generate Day Plan" }}
				onClick={generateDayPlan}
			>
				<ModelTraining sx={{ width: 36, height: 36 }} />
			</Fab>
			<BottomNav />
		</Container>
	);
};

export default Planner;
