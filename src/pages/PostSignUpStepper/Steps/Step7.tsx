import { Button, Typography } from "@mui/material";
import { CheckBoxWrapper } from ".";
import type { StepHandles } from "..";

const appliances = ["Blender", "Oven", "Microwave", "Stovetop", "Instant Pot"];

const Step7 = ({ handleNext }: StepHandles) => {
	return (
		<>
			<Typography variant="h6">Now select your kitchen appliances:</Typography>
			{appliances.map((appliance, index) => (
				<CheckBoxWrapper label={appliance} key={index} />
			))}
			<Button variant="contained" onClick={handleNext}>
				Continue
			</Button>
		</>
	);
};

export default Step7;
