import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import CustomButton from "../UI/CustomButton";
import Modal from "../UI/Modals/Modal";
import classes from "./Footer.module.css";

const Footer = () => {
	const [showModal, setShowModal] = useState(false);

	const toggleModalState = () => {
		setShowModal((prev) => !prev);
	};

	const btnProps = {
		onClick: toggleModalState,
	};
	return (
		<Grid container className={classes.footer}>
			<Grid item xs={6} lg={4}>
				<img src="/assets/GPT-logo2.png" alt="logo" />
				<Typography variant="subtitle2" display={"block"}>
					“One girl empowers another. Let's change lives together: one
					girl, one woman and one human being at a time.”
				</Typography>
				<Typography variant="body1" my={2}>
					Phone: +91 7973931882
				</Typography>
				<Typography variant="body1" my={2}>
					Email: info@girlpowertalk.com
				</Typography>
			</Grid>
			<Grid item xs={6} lg={2}>
				<Typography variant="h4" mb={4} textAlign={"center"}>
					About
				</Typography>
				<Typography
					variant="body1"
					className={classes.footerAnchor}
					py={1}
				>
					<a href="#aboutUs">About Us</a>
				</Typography>
				<Typography
					variant="body1"
					className={classes.footerAnchor}
					py={1}
				>
					<a href="https://girlpowertalk.com/blog/" target="new">
						Blog
					</a>
				</Typography>
				<Typography
					variant="body1"
					className={classes.footerAnchor}
					py={1}
				>
					<a href="https://girlpowertalk.com/press/" target="new">
						Press
					</a>
				</Typography>
			</Grid>
			<Grid item xs={6} lg={2}>
				<Typography variant="h4" mb={4} textAlign={"center"}>
					Team
				</Typography>
				<Typography
					variant="body1"
					className={classes.footerAnchor}
					py={1}
				>
					<a href="https://girlpowertalk.com/apply-now/" target="new">
						Apply now
					</a>
				</Typography>
				<Typography
					variant="body1"
					className={classes.footerAnchor}
					py={1}
				>
					<a href="#ourTeam">Our team</a>
				</Typography>
				<Typography
					variant="body1"
					className={classes.footerAnchor}
					py={1}
				>
					<a href="https://girlpowertalk.com/gallery/" target="new">
						Gallery
					</a>
				</Typography>
				<Typography
					variant="body1"
					className={classes.footerAnchor}
					py={1}
				>
					<a href="https://girlpowertalk.com/videos/" target="new">
						Videos
					</a>
				</Typography>
			</Grid>
			<Grid item xs={6} lg={2}>
				<Typography variant="h4" mb={4} textAlign={"center"}>
					Company
				</Typography>
				<Typography
					variant="body1"
					className={classes.footerAnchor}
					py={1}
				>
					<a href="https://girlpowertalk.com/apply-now/" target="new">
						Careers
					</a>
				</Typography>
				<Typography
					variant="body1"
					className={classes.footerAnchor}
					py={1}
				>
					<a
						href="https://girlpowertalk.com/contact-us/#"
						target="new"
					>
						Submit your story
					</a>
				</Typography>
				<Typography
					variant="body1"
					className={classes.footerAnchor}
					py={1}
				>
					<a
						href="https://www.google.com/maps/dir//girlpowertalk/@30.7067585,76.6151532,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390fefbdef862817:0x47e34ae0a9ab800!2m2!1d76.6851941!2d30.7066297?shorturl=1"
						target="new"
					>
						Get directions
					</a>
				</Typography>
				<Typography
					variant="body1"
					className={classes.footerAnchor}
					py={1}
				>
					<a
						href="https://girlpowertalk.com/privacy-policy/"
						target="new"
					>
						Privacy policy
					</a>
				</Typography>
			</Grid>
			<Grid item xs={6} lg={2}>
				<CustomButton label="Contact us" btnProps={btnProps} />

				{showModal && <Modal closeModal={toggleModalState}></Modal>}
			</Grid>
		</Grid>
	);
};

export default Footer;
