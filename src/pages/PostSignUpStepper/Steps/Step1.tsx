import { Button, Typography } from "@mui/material";
import type { StepHandles } from "..";

const Step1 = ({ handleNext }: StepHandles) => {
	return (
		<>
			<Typography variant="h6">Select your gender</Typography>
			<Button variant="outlined" onClick={handleNext}>
				Male
			</Button>
			<Button variant="outlined" onClick={handleNext}>
				Female
			</Button>
		</>
	);
};

export default Step1;
