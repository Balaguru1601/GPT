import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import CustomButton from "../UI/CustomButton";
import Modal from "../UI/Modals/Modal";
import TeamMap from "./Map";
import classes from "./Team.module.css";

const OurTeam = () => {
	const [showModal, setShowModal] = useState(false);

	const toggleModalState = () => {
		setShowModal((prev) => !prev);
	};

	const btnProps = {
		onClick: toggleModalState,
	};
	return (
		<Grid
			id="ourTeam"
			container
			spacing={{ xs: 2, sm: 3, md: 4, lg: 8 }}
			className={classes.ourTeam}
		>
			<Grid item md={4} xl={3} pb={2}>
				<Box>
					<Typography
						variant="h3"
						p={2}
						fontWeight={"bold"}
						align={"center"}
					>
						Our Team
					</Typography>
					<Typography variant="h6" pb={2} align={"center"}>
						We are building a global team of changemakers. Our young
						leaders learn, grow, gain opportunities, and create
						impact across the board. Our unique model allows
						individuals to gain technical skills, confidence, make
						lasting relationships, win mentors, while purposefully
						giving back to their communities. Most importantly,
						together we have fun and make a truly understanding
						support system for each other.
					</Typography>
				</Box>
			</Grid>
			<Grid item xs={12} md={8} xl={9} pb={2} className={classes.teamMap}>
				<TeamMap></TeamMap>
			</Grid>
			<CustomButton
				label="Work with us"
				right={true}
				btnProps={btnProps}
			/>
			{showModal && <Modal closeModal={toggleModalState}></Modal>}
		</Grid>
	);
};

export default OurTeam;
