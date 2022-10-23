import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useInput from "../../Hooks/use-input";
import { validateEmail } from "../../Utilities/FormValidationFunction";
import CustomFormControl from "../Form/CustomFormControl";
import CustomButton from "../UI/CustomButton";
import classes from "./AboutUs.module.css";

const AboutUs = () => {
	const emailField = useInput(
		{
			type: "email",
			label: "Email Id",
			name: "emailId",
		},
		validateEmail
	);

	const submitForm = (event) => {
		event.preventDefault();
		if (emailField.validities.isValid) return emailField.validities.reset();
		return emailField.validities.raiseError();
	};

	const btnProps = {
		onClick: submitForm,
		type: "submit",
	};
	return (
		<Box className={classes.aboutUs} id="aboutUs">
			<Typography
				variant="h3"
				pb={5}
				textAlign={"center"}
				fontWeight={700}
			>
				About Us
			</Typography>
			<Grid
				container
				spacing={{ xs: 2, sm: 3, md: 4, lg: 6, xl: 8 }}
				justifyContent="center"
				alignItems="center"
			>
				<Grid
					item
					xs={8}
					md={4}
					justifyContent="center"
					alignItems="center"
				>
					<img
						src="/assets/Rachita-sharma.png"
						alt="Co-founder"
						className={classes.founderImg}
					/>
					<Typography
						variant="h6"
						textAlign={"center"}
						color={"#3c3939"}
					>
						Co-Founder,Girl Power Talk
					</Typography>
					<Typography variant="h6" textAlign={"center"}>
						Chief Marketing Officer, Blue Ocean Global Technology
					</Typography>
				</Grid>
				<Grid item md={8}>
					<Typography variant="h6" pb={3}>
						<Typography
							variant="h6"
							fontWeight={700}
							component={"span"}
							color={"#3c3939"}
						>
							Girl Power Talk
						</Typography>{" "}
						is an amalgamation of cultures where profit meets
						purpose. Our team is determined to make the world a
						better place for people regardless of their locale and
						social strata. Through our nurturing culture of learning
						and mentorship, we instill young people with exceptional
						soft-skills, technical knowledge, and purpose in life.
					</Typography>
					<Typography variant="h6" pb={3} color={"#3c3939"}>
						Our mission is to drive impact through our ever-growing
						team of global leaders. We are relentlessly committed to
						education, inclusion and diversity, gender equality, and
						integrating the strengths of specially abled
						communities. Our platform is a safe space for all
						stories to be heard and shared.
					</Typography>
					<Box className={classes.newsLetter} ml={"auto"}>
						<Typography variant="h4" py={2} textAlign={"center"}>
							Subscribe to our newsletter
						</Typography>
						<form>
							<CustomFormControl
								field={emailField}
								IconBtnProps={{ disabled: true }}
								icon="Email"
							/>
							<CustomButton
								label="Subscribe now!"
								btnProps={btnProps}
								right={true}
							/>
						</form>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default AboutUs;
