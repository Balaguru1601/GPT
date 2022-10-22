import classes from "./HeroSection.module.css";
import { Typography, Grid } from "@mui/material";
import InfoForm from "../Form/InfoForm";

const HeroSection = () => {
	return (
		<Grid
			container
			className={classes.digitalMarketing}
			spacing={2}
			pt={15}
		>
			<Grid item xs={12} md={6}>
				<Typography variant="h3" fontWeight={"bold"} gutterBottom>
					A digital revolution led by young women!
				</Typography>
				<Typography variant="h6" color={"white"} gutterBottom>
					Girl Power Talk is passionate about elevating young women to
					become global leaders who are recognized for their myriad of
					talents and contributions.At Girl Power Talk, we are
					passionately dedicated in providing solutions in the field
					of digital marketing,business consultation and tech
					solutions.
				</Typography>
			</Grid>
			<Grid item xs={12} md={6}>
				<InfoForm></InfoForm>
			</Grid>
		</Grid>
	);
};

export default HeroSection;
