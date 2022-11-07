import {
	Box,
	BoxProps,
	Button,
	Step,
	StepContent,
	StepLabel,
	Stepper,
	Typography,
} from "@mui/material";
import { useState } from "react";
import FinishAnim from "./FinishAnim";

//varying steps count
const steps = [
	{
		label: "Breakfast",
		description: "some breakfast description",
	},
	{
		label: "Lunch",
		description: "some lunch description",
	},
	{
		label: "Dinner",
		description: "some dinner description",
	},
	{
		label: "Snacks",
		description: "some snacks description",
	},
];

///build on top of MUI Box
const MealsStepper = (props: BoxProps) => {
	const [activeStep, setActiveStep] = useState<number>(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<Box sx={{ maxWidth: 400, ...props.sx }} alignItems="center" {...props}>
			<Stepper activeStep={activeStep} orientation="vertical">
				{steps.map((step, index) => (
					<Step key={step.label}>
						<StepLabel
							optional={
								activeStep === steps.length - 1 &&
								index === steps.length - 1 ? (
									<Typography variant="caption">Last step</Typography>
								) : null
							}
						>
							{step.label}
						</StepLabel>
						<StepContent>
							<Typography>{step.description}</Typography>
							<Box sx={{ mb: 2 }}>
								<div>
									<Button
										variant="contained"
										onClick={handleNext}
										sx={{ mt: 1, mr: 1, borderRadius: "50px" }}
									>
										{activeStep === steps.length - 1 ? "Finish" : "Next"}
									</Button>
									<Button
										disabled={activeStep === 0}
										onClick={handleBack}
										sx={{ mt: 1, mr: 1, borderRadius: "50px" }}
									>
										Back
									</Button>
								</div>
							</Box>
						</StepContent>
					</Step>
				))}
			</Stepper>
			{activeStep === steps.length && <FinishAnim />}
		</Box>
	);
};

export default MealsStepper;
