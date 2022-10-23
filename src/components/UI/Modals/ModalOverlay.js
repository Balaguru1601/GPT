import classes from "./ModalOverlay.module.css";
import { Box, IconButton, Typography, List } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ModalForm from "./ModalForm";

const ModalOverlay = (props) => {
	if (props.data) {
		const dataItem = props.data;

		const list = dataItem.list.map((item, index) => (
			<Typography
				key={index}
				variant="body1"
				sx={{ fontSize: "large" }}
				color={"#3c3939"}
				py={1}
			>
				{item}
			</Typography>
		));

		return (
			<div className={classes.modalOverlay}>
				<IconButton
					className={classes.closeBtn}
					onClick={props.closeModal}
				>
					<CloseIcon />
				</IconButton>
				<div className={classes.modalContent}>
					{props.data && (
						<Box className={classes.serviceBox}>
							<Typography
								variant="h4"
								fontWeight={700}
								gutterBottom
								textAlign={"center"}
							>
								{dataItem.title}
							</Typography>
							<List>{list}</List>
						</Box>
					)}
					<ModalForm closeModal={props.closeModal} />
				</div>
			</div>
		);
	}
	return (
		<div className={classes.modalOverlay}>
			<IconButton className={classes.closeBtn} onClick={props.closeModal}>
				<CloseIcon />
			</IconButton>
			<div className={classes.modalContent}>
				<ModalForm closeModal={props.closeModal} />
			</div>
		</div>
	);
};

export default ModalOverlay;
