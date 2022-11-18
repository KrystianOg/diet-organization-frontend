import {
	Box,
	Typography,
	Container,
	Grid,
	FormControlLabel,
	Checkbox,
	Avatar,
	IconButton,
	styled,
} from "@mui/material";
import { LockOutlined, Close } from "@mui/icons-material";
import { Helmet } from "react-helmet-async";
// import { skipToken } from "@reduxjs/toolkit/dist/query/react";
import { TextField, Button } from "../../components/Rounded";
// import { useNavigate } from "react-router-dom";
import { Link } from "../../components/RouterLink";
import { FormEvent, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Carrot } from "../../animations/carrot.svg";
import { useForm } from "react-hook-form";
import { useSignInMutation } from "../../app/auth";
import { SignInCredentials } from "../../types/Auth";

const MCarrot = styled(Carrot)(({ theme }) => ({
	fill: theme.palette.primary.main,
	transform: "rotate(45deg)",
}));

const SignIn = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const rememberMe = useRef<HTMLInputElement>(null);
	const from = location.state?.from?.pathname || "/";

	const {
		register,
		formState: { errors },
		watch,
		handleSubmit,
		setError,
	} = useForm();
	const [signIn, { isLoading }] = useSignInMutation();

	const onSubmit = async (data: any) => {
		if (Object.keys(errors).length > 0) return;

		await signIn(data as SignInCredentials)
			.unwrap()
			.then((res) => {
				navigate(from, { replace: true });
				rememberMe?.current?.checked
					? localStorage.setItem("refresh", res.refresh)
					: sessionStorage.setItem("refresh", res.refresh);
			})
			.catch((err) => {
				console.log(err);
				if (err.status === 400) {
					if (err.data) {
						setError(
							"email",
							{
								type: "manual",
								message: err.data.error,
							},
							{
								shouldFocus: true,
							}
						);
						setError("password", {
							type: "manual",
							message: err.data.error,
						});
					}
				}
			});
	};

	return (
		<Container component="main" maxWidth="xs">
			<Helmet>
				<title>Sign In</title>
			</Helmet>
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: "transparent" }}>
					<MCarrot />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						autoComplete="email"
						autoFocus
						{...register("email", {
							required: "Email is required",
						})}
						helperText={errors.email && String(errors.email.message)}
						error={!!errors.email}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						{...register("password", {
							required: "Password is required",
						})}
						helperText={errors.password && String(errors.password.message)}
						error={!!errors.password}
					/>
					<FormControlLabel
						control={
							<Checkbox
								value="remember"
								color="primary"
								inputRef={rememberMe}
							/>
						}
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

export default SignIn;
