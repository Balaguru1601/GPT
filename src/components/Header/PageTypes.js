import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Fragment, useState } from "react";

const PageTypes = () => {
	const [drawerState, setDrawerState] = useState(false);

	const toggleDrawer = (event) => {
		if (
			event &&
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setDrawerState((prev) => !prev);
	};

	const list = (anchor) => (
		<Box
			role="presentation"
			onClick={toggleDrawer}
			onKeyDown={toggleDrawer}
		>
			<List>
				{[
					"Digital marketing",
					"Public relations",
					"Business Consulting",
					"Tech Solutions",
				].map((text) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<Fragment>
			<IconButton
				onClick={toggleDrawer}
				size="large"
				sx={{
					ml: "auto",
				}}
			>
				<MenuIcon />
			</IconButton>
			<SwipeableDrawer
				anchor="right"
				open={drawerState}
				onClose={toggleDrawer}
				onOpen={toggleDrawer}
			>
				{list("right")}
			</SwipeableDrawer>
		</Fragment>
	);
};

export default PageTypes;
