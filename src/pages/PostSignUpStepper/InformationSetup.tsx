import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Container, MobileStepper, Button, Stack } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import {
	Step1,
	Step2,
	Step3,
	Step4,
	Step5,
	Step6,
	Step7,
	Step8,
} from "./Steps";

const nonSkippable = [4, 7];
const steps = [Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8];

const InformationSetup = () => {
	const theme = useTheme();
	const [activeStep, setActiveStep] = useState<number>(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
	};

	return (
		<Container>
			<Stack spacing={2}>{steps[activeStep]({ handleBack, handleNext })}</Stack>

			<MobileStepper
				variant="progress"
				steps={8}
				activeStep={activeStep}
				nextButton={
					<Button
						size="small"
						onClick={handleNext}
						disabled={nonSkippable.includes(activeStep)}
					>
						Skip
						{theme.direction === "rtl" ? (
							<KeyboardArrowLeft />
						) : (
							<KeyboardArrowRight />
						)}
					</Button>
				}
				backButton={
					<Button size="small" onClick={handleBack} disabled={activeStep === 0}>
						{theme.direction === "rtl" ? (
							<KeyboardArrowRight />
						) : (
							<KeyboardArrowLeft />
						)}
						Back
					</Button>
				}
			/>
		</Container>
	);
};

export default InformationSetup;
