import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import classes from "./Navbar.module.css";

const pages = ["Services", "About Us", "Our Team"];
const anchors = ["services", "aboutUs", "ourTeam"];

function Navbar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar
			position="static"
			sx={{
				py: 2,
				backgroundColor: "rgba(0,0,0,0.8)",
				width: "100%",
			}}
		>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<img
						src="/assets/GPT-logo2.png"
						alt="logo"
						style={{
							maxWidth: "88%",
							maxHeight: "90%",
						}}
					/>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "flex", md: "none" },
							justifyContent: "flex-end",
							alignItems: "center",
							mx: "auto",
						}}
					>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon fontSize="large" />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page, index) => (
								<MenuItem
									key={page}
									onClick={handleCloseNavMenu}
								>
									<Typography
										variant="h6"
										textAlign="center"
										component="a"
										href={`#${anchors[index]}`}
										sx={{
											textDecoration: "none",
											color: "inherit",
										}}
									>
										{page}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
							justifyContent: "flex-end",
						}}
					>
						{pages.map((page, index) => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								href={`#${anchors[index]}`}
								className={classes.navBtn}
								sx={{
									my: 2,
									mr: 2,
									color: "white",
									display: "block",
									fontSize: "large",
								}}
							>
								{page}
							</Button>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default Navbar;
