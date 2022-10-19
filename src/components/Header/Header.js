import classes from "./Header.module.css";
import PageTypes from "./PageTypes";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const Header = () => {
	const navigate = useNavigate();
	return (
		<div className={classes.header}>
			<div className={classes.menubar}>
				<Button
					onClick={() => navigate("/")}
					sx={{
						padding: 0,
					}}
				>
					<img src="/assets/GPT-logo2.png" alt="GPT logo" />
				</Button>
				{/* <PageTypes /> */}
			</div>
		</div>
	);
};

export default Header;
