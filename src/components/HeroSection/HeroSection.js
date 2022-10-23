import classes from "./HeroSection.module.css";
import { Typography, Grid } from "@mui/material";
import InfoForm from "../Form/InfoForm";

const HeroSection = () => {
	return (
		<Grid container className={classes.digitalMarketing} spacing={2} mt={0}>
			<Grid item xs={12} md={6}>
				<Typography variant="h3" fontWeight={"bold"} gutterBottom>
					A{" "}
					<Typography
						variant="h3"
						fontWeight={700}
						component={"span"}
						color={"#3c3939"}
					>
						digital revolution
					</Typography>{" "}
					led by young women!
				</Typography>
				<Typography variant="h6" color={"white"} gutterBottom>
					<Typography
						variant="h6"
						fontWeight={700}
						component={"span"}
						color={"#3c3939"}
					>
						Girl Power Talk
					</Typography>{" "}
					is passionate about elevating{" "}
					<Typography
						variant="h6"
						component={"span"}
						fontWeight={700}
						color={"#3c3939"}
					>
						young women
					</Typography>{" "}
					to become global leaders who are recognized for their myriad
					of talents and contributions.Here, we are passionately
					dedicated in providing solutions in the field of digital
					marketing, business consultation, and tech solutions.
				</Typography>
			</Grid>
			<Grid item xs={12} md={6}>
				<InfoForm></InfoForm>
			</Grid>
		</Grid>
	);
};

export default HeroSection;
