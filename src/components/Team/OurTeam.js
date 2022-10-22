import React from "react";
import TeamMap from "./Map";
import classes from "./Team.module.css";

const OurTeam = () => {
	return (
		<div className={classes.ourTeam}>
			<TeamMap></TeamMap>
		</div>
	);
};

export default OurTeam;
