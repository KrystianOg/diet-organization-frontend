import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import type { StepHandles } from "..";

const Step4 = ({ handleNext }: StepHandles) => {
	return (
		<>
			<Typography variant="h6">How often do you workout?</Typography>

			<Button variant="outlined" onClick={handleNext}>
				Little or none
			</Button>
			<Button variant="outlined" onClick={handleNext}>
				Light exercise/sports 1-3 days/week
			</Button>
			<Button variant="outlined" onClick={handleNext}>
				Moderate exercise/sports 3-5 days/week
			</Button>
			<Button variant="outlined" onClick={handleNext}>
				Exercise/sports 6-7 days a week
			</Button>
			<Button variant="outlined" onClick={handleNext}>
				Hard exercise/sports 6-7 days a week
			</Button>
		</>
	);
};

export default Step4;
