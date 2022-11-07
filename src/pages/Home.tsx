// import HomeSlideIn from "../components/HomeSlideIn";
import { Container } from "@mui/material";
import { DrawerNav } from "../components";
import { BottomNav } from "../components";

const Home = () => {
	return (
		<>
			<DrawerNav />
			<Container component="main" maxWidth="xs">
				{/* <HomeSlideIn /> */}
				<BottomNav />
			</Container>
		</>
	);
};

export default Home;
