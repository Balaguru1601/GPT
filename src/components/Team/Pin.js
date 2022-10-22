import * as React from "react";
import WomanIcon from "@mui/icons-material/Woman";
import ManIcon from "@mui/icons-material/Man";

function Pin({ size = 20, type }) {
	return (
		<>
			{" "}
			{type === "male" && (
				<ManIcon
					sx={{
						cursor: "pointer",
						color: "red",
					}}
				/>
			)}
			{type === "female" && (
				<WomanIcon
					sx={{
						cursor: "pointer",
						color: "red",
					}}
				/>
			)}
		</>
	);
}

export default React.memo(Pin);
