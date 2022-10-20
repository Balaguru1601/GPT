import classes from "./ModalOverlay.module.css";
import {
	Box,
	IconButton,
	Typography,
	ListItem,
	ListItemText,
	ListItemIcon,
	List,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import ModalForm from "./ModalForm";

const ModalOverlay = (props) => {
	const dataItem = props.data;

	const list = dataItem.list.map((item, index) => (
		<ListItem key={index}>
			<ListItemIcon sx={{ color: "white" }}>
				<TripOriginIcon />
			</ListItemIcon>
			<ListItemText primary={item} />
		</ListItem>
	));

	return (
		<div className={classes.modalOverlay}>
			<IconButton className={classes.closeBtn} onClick={props.closeModal}>
				<CloseIcon />
			</IconButton>
			<div className={classes.modalContent}>
				<Box className={classes.serviceBox}>
					<Typography variant="h4" gutterBottom textAlign={"center"}>
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
