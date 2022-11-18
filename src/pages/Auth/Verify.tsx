import { useParams } from "react-router-dom";
import { useVerifyQuery } from "../../app/auth";
import { ConfirmData } from "../../types";
import { CircularProgress } from "@mui/material";

const Verify = () => {
	const { confirmation_token, hash } = useParams();
	const { data, isFetching, isLoading, isError } = useVerifyQuery({
		confirmation_token,
		hash,
	} as ConfirmData);

	if (isError) return <div>An error occurred!</div>;
	if (isLoading) return <CircularProgress />;
	if (!data) return <div>Missing data</div>;

	return (
		<div>
			<span>Successfully verified</span>
			<button>let's go</button>
		</div>
	);
};

export default Verify;
