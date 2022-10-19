import { Button } from "@mui/material";
import classes from "./UI.module.css";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

const CustomButton = (props) => {
	if (props.imgBtn)
		return (
			<Button
				{...props.btnProps}
				className={classes.customBtn}
				variant="contained"
				endIcon={<CompareArrowsIcon fontSize="large" />}
				sx={{}}
			>
				{props.label}
			</Button>
		);
	return (
		<Button {...props.btnProps} className={classes.customBtn}>
			{props.label}
		</Button>
	);
	// <img
	// 					src="/assets/logo-icon2.jpg"
	// 					alt="logo-icon"
	// 					className={classes.imgBtn}
	// 				/>
};

export default CustomButton;
