import {
	Stack,
	IconButton,
	Avatar,
	Badge,
	styled,
	Typography,
	Backdrop,
} from "@mui/material";
import { QrCode2 } from "@mui/icons-material";
import { BottomNav } from "../../components";
import QRCode from "./QRCode";
import { useState } from "react";

const SmallAvatar = styled(Avatar)(({ theme }) => ({
	width: 24,
	height: 24,
	border: `2px solid ${theme.palette.background.default}`,
	backgroundColor: theme.palette.primary.dark,
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
	width: 76,
	height: 76,
	backgroundColor: theme.palette.secondary.dark,
}));

const Profile = () => {
	const copyUsername = () => navigator.clipboard.writeText("username");
	const [openQR, setOpenQR] = useState<boolean>(false);

	const handleClose = () => setOpenQR(false);
	const handleToggle = () => setOpenQR(!openQR);

	return (
		<Stack alignItems="center" spacing={2} sx={{ margin: 2 }}>
			<Badge
				overlap="circular"
				anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
				badgeContent={<SmallAvatar>+</SmallAvatar>}
				// onClick={}
			>
				<StyledAvatar />
			</Badge>
			<Stack direction="row" spacing={0.5}>
				<Typography component="h1" variant="body2" onClick={copyUsername}>
					@username
				</Typography>
				<IconButton
					aria-label="qr-code"
					sx={{ width: 20, height: 20 }}
					onClick={handleToggle}
				>
					<QrCode2 sx={{ width: 20, height: 20 }} />
				</IconButton>
				<Backdrop
					sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
					open={openQR}
					onClick={handleClose}
				>
					<QRCode url="http://somehitng.here/lksdgfasg" />
				</Backdrop>
			</Stack>

			<BottomNav />
		</Stack>
	);
};

export default Profile;
