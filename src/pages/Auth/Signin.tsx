import {
	Box,
	Typography,
	Container,
	Grid,
	FormControlLabel,
	Checkbox,
	Avatar,
	IconButton,
} from "@mui/material";
import { LockOutlined, Close } from "@mui/icons-material";
import { Helmet } from "react-helmet-async";
// import { skipToken } from "@reduxjs/toolkit/dist/query/react";
import { TextField, Button } from "../../components/Rounded";
// import { useNavigate } from "react-router-dom";
import { Link } from "../../components/RouterLink";
import { FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const from = location.state?.from?.pathname || "/";

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		console.log("submit");
	};

	return (
		<Container component="main" maxWidth="xs">
			<Helmet>
				<title>Sign in</title>
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
					Sign in
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
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Sign In
					</Button>
					<p>Or</p>
					<Button variant="contained" fullWidth>
						Sign in with google
					</Button>
					<Grid container>
						<Grid item xs>
							<Link to="#">Forgot password?</Link>
						</Grid>
						<Grid item>
							<Link to="/signup">Don't have an account? Sign Up</Link>
						</Grid>
					</Grid>
				</Box>
				<IconButton
					color="primary"
					aria-label="close"
					sx={{ margin: "3rem", padding: "10px" }}
					onClick={() => navigate(from, { replace: true })}
				>
					<Close sx={{ width: "56px", height: "56px" }} />
				</IconButton>
			</Box>
		</Container>
	);
};

export default Login;
