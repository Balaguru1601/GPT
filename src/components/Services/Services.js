import { Grid } from "@mui/material";
import ServiceCard from "../UI/Cards/ServiceCard";
import classes from "./Services.module.css";

const Services = () => {
	return (
		<div className={classes.servicesWrapper}>
			<Grid
				container
				spacing={{ xs: 2, sm: 3, md: 5, lg: 8 }}
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
