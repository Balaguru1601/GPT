import { Button } from "@mui/material";
import classes from "./UI.module.css";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

const CustomButton = (props) => {
	return (
		<Button
			{...props.btnProps}
			className={props.right ? classes.rightBtn : classes.customBtn}
			variant="contained"
			endIcon={<CompareArrowsIcon fontSize="large" />}
			sx={{}}
		>
			{props.label}
		</Button>
	);
};

export default CustomButton;
