import classes from "./ModalOverlay.module.css";
import { Box, IconButton, Typography, List } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ModalForm from "./ModalForm";

const ModalOverlay = (props) => {
	const dataItem = props.data;

	const list = dataItem.list.map((item, index) => (
		<Typography variant="h6" py={1}>
			{item}
		</Typography>
	));

	return (
		<div className={classes.modalOverlay}>
			<IconButton className={classes.closeBtn} onClick={props.closeModal}>
				<CloseIcon />
			</IconButton>
			<div className={classes.modalContent}>
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
				<ModalForm closeModal={props.closeModal} />
			</div>
		</div>
	);
};

export default ModalOverlay;
