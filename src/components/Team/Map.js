import { useState, useRef } from "react";
import Map, { Marker, NavigationControl, ScaleControl } from "react-map-gl";
import { userData } from "../../Utilities/UserData";
import Pin from "./Pin";
import MapPopup from "./MapPopup";
import classes from "./Team.module.css";

const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const TeamMap = () => {
	const cities = userData;
	const [popupInfo, setPopupInfo] = useState(null);
	const mapRef = useRef(null);

	const pins = cities.map((data, index) => {
		return (
			<Marker
				key={`marker-${index}`}
				longitude={data.longitude}
				latitude={data.latitude}
				anchor="center"
				onClick={(e) => {
					e.originalEvent.stopPropagation();
					setPopupInfo(data);
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
			classname={classes.TeamMap}
		>
			{/* <GeolocateControl position="top-left" /> */}
			{/* <FullscreenControl position="top-left" /> */}
			<NavigationControl position="top-left" />
			<ScaleControl />

			{pins}

			{popupInfo && (
				<MapPopup popupInfo={popupInfo} setPopupInfo={setPopupInfo} />
			)}
		</Map>
	);
};

export default TeamMap;
