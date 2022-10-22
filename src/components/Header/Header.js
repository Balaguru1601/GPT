import classes from "./Header.module.css";
import PageTypes from "./PageTypes";
import Button from "@mui/material/Button";

const Header = () => {
	return (
		<div className={classes.header}>
			<div className={classes.menubar}>
				<Button
					sx={{
						padding: 0,
					}}
				>
					<img src="/assets/GPT-logo2.png" alt="GPT logo" />
				</Button>
			</div>
		</div>
	);
};

export default Header;
