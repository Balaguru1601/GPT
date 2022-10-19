import * as Icon from "@mui/icons-material";
import classes from "./InfoForm.module.css";
import {
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
	FormControl,
	FormHelperText,
} from "@mui/material";

const CustomFormControl = (props) => {
	const { field } = props;
	const InputIcon = Icon[props.icon];

	return (
		<FormControl
			className={classes.formControl}
			error={field.validities.isInvalid}
			color={field.validities.isValid ? "success" : "primary"}
		>
			<InputLabel
				htmlFor={field.properties.id}
				sx={{
					color: "#E63946",
				}}
			>
				{field.validities.label}
			</InputLabel>
			<OutlinedInput
				sx={{
					marginRight: "1rem",
					width: "100%",
				}}
				{...field.properties}
				endAdornment={
					<InputAdornment position="start">
						<IconButton {...props.IconBtnProps}>
							<InputIcon
								sx={{
									color: "#E63946",
								}}
							/>
						</IconButton>
					</InputAdornment>
				}
				type={props.type ? props.type : field.properties.type}
			/>
			{field.validities.isInvalid && (
				<FormHelperText id="component-error-text">
					{field.validities.message}
				</FormHelperText>
			)}
		</FormControl>
	);
};

export default CustomFormControl;
