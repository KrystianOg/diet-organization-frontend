import { Button, Typography } from "@mui/material";
import type { StepHandles } from "..";

const Step6 = ({ handleNext }: StepHandles) => {
	return (
		<>
			<Typography variant="h6">
				How much time would you like to spend preparing a meal?
			</Typography>
			<Button variant="outlined" onClick={handleNext}>
				Less than 30 minutes
			</Button>
			<Button variant="outlined" onClick={handleNext}>
				30-60 minutes
			</Button>
			<Button variant="outlined" onClick={handleNext}>
				More than 1 hour
			</Button>
		</>
	);
};

export default Step6;
