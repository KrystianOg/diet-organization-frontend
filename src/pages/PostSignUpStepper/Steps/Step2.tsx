import {
	Box,
	Button,
	InputAdornment,
	TextField,
	Typography,
} from "@mui/material";
import type { StepHandles } from "..";

const Step2 = ({ handleNext }: StepHandles) => {
	return (
		<>
			<Typography variant="h6">
				Please tell us about your body measurements
			</Typography>

			<TextField
				label="Weight (kg)"
				type="number"
				InputProps={{
					endAdornment: <InputAdornment position="end">kg</InputAdornment>,
				}}
				variant="outlined"
				autoComplete="off"
			/>
			<TextField
				label="Age (years)"
				type="number"
				autoComplete="off"
				variant="outlined"
			/>
			<TextField
				label="Height (cm)"
				type="number"
				InputProps={{
					endAdornment: <InputAdornment position="end">cm</InputAdornment>,
				}}
				variant="outlined"
				autoComplete="off"
			/>
			<Button variant="contained" onClick={handleNext}>
				Continue
			</Button>
		</>
	);
};

export default Step2;
