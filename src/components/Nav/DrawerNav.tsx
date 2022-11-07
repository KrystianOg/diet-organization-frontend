import { useState } from "react";
import { Stack } from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import { NavLink, IconButton, Fib, Drawer } from "./NavComponents";
import { useWindowSize } from "usehooks-ts";

const DrawerNav = () => {
	const [active, setActive] = useState<boolean>(false);

	//TODO: remove that
	const [authenticated, setAuthenticated] = useState<boolean>(true);
	const { width } = useWindowSize();
	const onSignout = () => {
		console.log("signed out");
	};

	if (width < 600)
		return (
			<>
				{/* TODO */}

				<Fib onClick={() => setActive(!active)}>
					<Menu sx={{ height: "42px", width: "42px" }} />
				</Fib>

				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					variant="temporary"
					anchor="right"
					open={active}
					onClose={() => setActive(false)}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
				>
					<Stack height="100%" alignItems="stretch" justifyContent="center">
						{authenticated ? (
							<>
								<NavLink to="/planner">PLAN</NavLink>
								<NavLink to="/calendar">CALENDAR</NavLink>
								<NavLink to="/recipes">RECIPES</NavLink>
								<NavLink to="/profile">PROFILE</NavLink>
								<NavLink to="/" onClick={onSignout}>
									SIGN OUT
								</NavLink>
							</>
						) : (
							<>
								<NavLink to="/signin">SIGN IN</NavLink>
								<NavLink to="/signup">SIGN UP</NavLink>
							</>
						)}
						<IconButton onClick={() => setActive(false)}>
							<Close fontSize="inherit" />
						</IconButton>
					</Stack>
				</Drawer>
			</>
		);

	return null;
};

export default DrawerNav;
