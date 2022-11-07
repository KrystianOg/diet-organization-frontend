import { FormEvent } from "react";
import {
	Box,
	Typography,
	Container,
	Grid,
	Avatar,
	IconButton,
} from "@mui/material";
import { LockOutlined, Close } from "@mui/icons-material";
import { Helmet } from "react-helmet-async";
// import { skipToken } from "@reduxjs/toolkit/dist/query/react";
import { TextField, Button } from "../../components/Rounded";
import { Link } from "../../components/RouterLink";

const Register = () => {
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		console.log("submit");
	};

	return (
		<Container component="main" maxWidth="xs">
			<Helmet>
				<title>Register</title>
			</Helmet>
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
					<LockOutlined />
				</Avatar>
				<Typography component="h1" variant="h5">
					Register
				</Typography>
				<Box
					component="form"
					onSubmit={(e) => handleSubmit(e)}
					noValidate
					sx={{ mt: 1 }}
				>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="repeat-password"
						label="Repeat password"
						type="password"
						id="repeat-password"
						autoComplete="new-password"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Sign In
					</Button>
					<Grid container>
						<Grid item>
							<Link to="/signin">{"Already a member? Sign in"}</Link>
						</Grid>
					</Grid>
				</Box>
				<IconButton
					className="mobile-visible"
					color="primary"
					aria-label="close"
					sx={{ margin: "3rem", padding: "10px" }}
				>
					<Close sx={{ width: "56px", height: "56px" }} />
				</IconButton>
			</Box>
		</Container>
	);
};

export default Register;
