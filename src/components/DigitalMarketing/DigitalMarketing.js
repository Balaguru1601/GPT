import classes from "./DigitalMarketing.module.css";
import { Typography, Box, Grid } from "@mui/material";
import InfoForm from "../Form/InfoForm";

const DigitalMarketing = () => {
	return (
		<Grid container className={classes.digitalMarketing} spacing={2}>
			<Grid item xs={12} md={6}>
				{/* <Typography variant="h3" gutterBottom>
					The best marketing doesn't feel like marketing!
				</Typography>
				<Typography variant="h6" gutterBottom>
					The one stop solution for promotion and rapid growth of
					business with a highly integrated,young digital marketing
					teams.
				</Typography> */}
				<Typography variant="h3" gutterBottom>
					A digital revolution led by young women!
				</Typography>
				<Typography variant="h6" gutterBottom>
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

export default DigitalMarketing;
