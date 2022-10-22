import { useState, useMemo, useEffect, useRef } from "react";
import Map, {
	Marker,
	Popup,
	NavigationControl,
	FullscreenControl,
	ScaleControl,
	useMap,
	GeolocateControl,
	MapProvider,
} from "react-map-gl";
import { userData } from "../../Utilities/UserData";
import ControlPanel from "./ControlPanel";
import Pin from "./Pin";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Box, Typography, IconButton } from "@mui/material";
import classes from "./Team.module.css";
import { color } from "@mui/system";

const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const TeamMap = () => {
	const cities = userData;
	const [popupInfo, setPopupInfo] = useState(null);
	const mapRef = useRef(null);
	const { teamMap } = useMap();
	console.log(teamMap);

	// useEffect(() => {
	// 	if (mapRef.current) {
	// 		property.map(({ laty_decimal, longx_decimal }) =>
	// 			mapRef.current?.setCenter({
	// 				lat: laty_decimal,
	// 				lng: longx_decimal,
	// 			})
	// 		);
	// 	}
	// }, [property]);

	useEffect(() => {});

	const pins = cities.map((data, index) => {
		return (
			<Marker
				key={`marker-${index}`}
				longitude={data.longitude}
				latitude={data.latitude}
				anchor="left"
				onClick={(e) => {
					// If we let the click event propagates to the map, it will immediately close the popup
					// with `closeOnClick: true`
					e.originalEvent.stopPropagation();
					setPopupInfo(data);
					console.log(mapRef);
					mapRef.current.flyTo({
						center: [data.longitude, data.latitude],
					});
				}}
			>
				<Pin type={data.img} />
			</Marker>
		);
	});

	return (
		<MapProvider>
			<Map
				initialViewState={{
					latitude: 20.593683,
					longitude: 78.962883,
					zoom: 3,
					bearing: 0,
					pitch: 0,
				}}
				id="teamMap"
				mapStyle="mapbox://styles/mapbox/dark-v9"
				mapboxAccessToken={TOKEN}
				renderWorldCopies={false}
				ref={mapRef}
			>
				{/* <GeolocateControl position="top-left" /> */}
				{/* <FullscreenControl position="top-left" /> */}
				<NavigationControl position="top-left" />
				<ScaleControl />

				{pins}

				{popupInfo && (
					<Popup
						focusAfterOpen={false}
						anchor="left"
						longitude={Number(popupInfo.longitude)}
						latitude={Number(popupInfo.latitude)}
						onClose={() => setPopupInfo(null)}
						style={{ backgroundColor: "#ffe6e6" }}
					>
						<div>
							<Box className={classes.popupBox}>
								<img
									src={`/assets/${popupInfo.img}.png`}
									alt="male-logo"
								/>
								<Typography variant="h6" fontWeight={"bold"}>
									{popupInfo.name}
								</Typography>
								<Typography variant="body1">
									{popupInfo.role}
								</Typography>
								<Typography variant="caption">
									{popupInfo.description}
								</Typography>
								<Box>
									<IconButton href={popupInfo.linkedIn}>
										<LinkedInIcon />
									</IconButton>
									<IconButton href={popupInfo.mail}>
										<EmailIcon />
									</IconButton>
								</Box>
							</Box>
						</div>
					</Popup>
				)}
			</Map>

			{/* <ControlPanel /> */}
		</MapProvider>
	);
};

export default TeamMap;
