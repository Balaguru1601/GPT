import { Box, Card, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import { data } from "../../../Utilities/Data";
import CustomButton from "../CustomButton";
import Modal from "../Modals/Modal";
import classes from "./ServiceCard.module.css";

const ServiceCard = (props) => {
	const dataItem = data.find((item) => item.label === props.name);

	const [showModal, setShowModal] = useState(false);

	const toggleModalState = () => {
		setShowModal((prev) => !prev);
	};

	const btnProps = {
		onClick: toggleModalState,
	};

	// const content =
	return (
		<Box className={classes.serviceCardBox}>
			<img src={`/assets/${props.name}.gif`} alt={`${props.name}.gif`} />
			<Card className={classes.serviceCard}>
				<CardContent className={classes.serviceCardContent}>
					<Typography
						variant="h4"
						gutterBottom
						className={classes.cardTitle}
					>
						{dataItem.title}
					</Typography>
					<Typography
						variant="body1"
						gutterBottom
						className={classes.cardContent}
					>
						{dataItem.description}
					</Typography>
					<CustomButton label="Know more" btnProps={btnProps} />
					{showModal && (
						<Modal
							data={dataItem}
							closeModal={toggleModalState}
						></Modal>
					)}
				</CardContent>
			</Card>
		</Box>
	);
};

export default ServiceCard;
