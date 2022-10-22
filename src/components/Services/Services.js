import { Grid, Typography } from "@mui/material";
import ServiceCard from "../UI/Cards/ServiceCard";
import classes from "./Services.module.css";

const Services = () => {
	return (
		<div className={classes.servicesWrapper}>
			<Typography variant="h3" textAlign={"center"} color="white" pb={5}>
				Our Services
			</Typography>
			<Grid
				container
				spacing={{ xs: 2, sm: 3, md: 4, lg: 8 }}
				justifyContent="center"
				alignItems="center"
			>
				<Grid item xs={10} md={4} xl={3}>
					<ServiceCard name="digital-marketing"></ServiceCard>
				</Grid>
				<Grid item xs={10} md={4} xl={3}>
					<ServiceCard name="business-consultation"></ServiceCard>
				</Grid>
				<Grid item xs={10} md={4} xl={3}>
					<ServiceCard name="tech-services"></ServiceCard>
				</Grid>
			</Grid>
		</div>
	);
};

export default Services;
