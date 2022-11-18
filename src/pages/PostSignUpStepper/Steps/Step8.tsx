import { Button, Typography } from "@mui/material";
import { CheckBoxWrapper } from ".";
import type { StepHandles } from "..";
import { useNavigate } from "react-router-dom";
const restrictions = [
	"Vegan",
	"Vegetarian",
	"Gluten Free",
	"Lactose intolerant",
];

const Step8 = ({ handleNext }: StepHandles) => {
	const navigate = useNavigate();
	return (
		<>
			<Typography variant="h6">
				Now check any dietary restrictions that you have
			</Typography>
			{restrictions.map((restriction, index) => (
				<CheckBoxWrapper label={restriction} key={index} />
			))}
			<Button variant="contained" onClick={() => navigate("/")}>
				Continue
			</Button>
		</>
	);
};

export default Step8;
