import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import type { StepHandles } from "..";

const Step5 = ({ handleNext }: StepHandles) => {
	return (
		<>
			<Typography variant="h6">How many meals do you usually eat?</Typography>
			<Button variant="outlined" onClick={handleNext}>
				Two
			</Button>
			<Button variant="outlined" onClick={handleNext}>
				Three
			</Button>
			<Button variant="outlined" onClick={handleNext}>
				Four
			</Button>
			<Button variant="outlined" onClick={handleNext}>
				Five
			</Button>
		</>
	);
};

export default Step5;
