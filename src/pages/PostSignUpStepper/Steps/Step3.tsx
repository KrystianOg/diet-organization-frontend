import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import type { StepHandles } from "..";

const Step3 = ({ handleNext }: StepHandles) => {
	return (
		<>
			<Typography variant="h6">What is your desired weight?</Typography>
			<TextField
				label="Weight (kg)"
				type="number"
				InputProps={{
					endAdornment: <InputAdornment position="end">kg</InputAdornment>,
				}}
				variant="outlined"
			/>
			<Button variant="contained" onClick={handleNext}>
				Continue
			</Button>
		</>
	);
};

export default Step3;
