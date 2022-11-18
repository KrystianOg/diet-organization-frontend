import { FormEvent, useEffect, useRef } from "react";
import {
	Box,
	Typography,
	Container,
	Grid,
	Avatar,
	IconButton,
	styled,
	CircularProgress,
} from "@mui/material";
import { LockOutlined, Close } from "@mui/icons-material";
import { Helmet } from "react-helmet-async";
// import { skipToken } from "@reduxjs/toolkit/dist/query/react";
import { TextField, Button } from "../../components/Rounded";
import { Link } from "../../components/RouterLink";
import { ReactComponent as Carrot } from "../../animations/carrot.svg";
import { useSignUpMutation } from "../../app/auth";
import { useForm } from "react-hook-form";
import { SignUpCredentials } from "../../types";
import { useNavigate, useLocation } from "react-router-dom";

const MCarrot = styled(Carrot)(({ theme }) => ({
	fill: theme.palette.primary.main,
	transform: "rotate(45deg)",
}));

const SignUp = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const from = location.state?.from?.pathname || "/";

	const {
		register,
		formState: { errors },
		watch,
		handleSubmit,
		setError,
	} = useForm();
	const [signUp, { isLoading }] = useSignUpMutation();

	const onSubmit = async (data: any) => {
		if (Object.keys(errors).length > 0) return;

		await signUp(data as SignUpCredentials)
			.unwrap()
			.then((res) => {
				navigate(from, { replace: true });
			})
			.catch((err) => {
				if (err.status === 400) {
					if (err.data.password) {
						setError(
							"password",
							{
								type: "manual",
								message: err.data.password,
							},
							{
								shouldFocus: true,
							}
						);
						setError("password2", {
							type: "manual",
							message: "",
						});
					}
				}
			});
	};

	return (
		<Container component="main" maxWidth="xs">
			<Helmet>
				<title>Sign Up</title>
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
					Sign Up
				</Typography>
				<Box
					component="form"
					onSubmit={handleSubmit(onSubmit)}
					noValidate
					sx={{ mt: 1 }}
				>
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
							pattern: {
								value:
									/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

								message: "Invalid email",
							},
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
							minLength: {
								value: 8,
								message: "Password must be at least 8 characters",
							},
							pattern: {
								value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
								message:
									"Password must contain at least one uppercase letter, one lowercase letter, and one number",
							},
						})}
						helperText={errors.password && String(errors.password.message)}
						error={!!errors.password}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						label="Repeat password"
						type="password"
						id="repeat-password"
						autoComplete="new-password"
						{...register("password2", {
							required: true,
							validate: (value: string) =>
								value === watch("password") || "Passwords do not match",
						})}
						helperText={errors.password2 && String(errors.password2.message)}
						error={!!errors.password2}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						{isLoading ? <CircularProgress /> : "Sign Up"}
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
					onClick={() => navigate("/")}
				>
					<Close sx={{ width: "56px", height: "56px" }} />
				</IconButton>
			</Box>
		</Container>
	);
};

export default SignUp;
