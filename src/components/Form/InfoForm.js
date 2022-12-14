import CustomFormControl from "./CustomFormControl";
import classes from "./InfoForm.module.css";
import {
	validateEmail,
	validateText,
	validatePhNumber,
} from "../../Utilities/FormValidationFunction";
import useInput from "../../Hooks/use-input";
import CustomButton from "../UI/CustomButton";

const InfoForm = () => {
	const userField = useInput(
		{ type: "text", label: "Name", name: "username" },
		validateText
	);
	const emailField = useInput(
		{
			type: "email",
			label: "Email Id",
			name: "emailId",
		},
		validateEmail
	);
	const phoneField = useInput(
		{
			type: "text",
			label: "Phone",
			name: "phoneNo",
		},
		validatePhNumber
	);
	const messageField = useInput(
		{
			type: "text",
			label: "Message",
			name: "message",
		},
		validateText
	);

	messageField.properties = {
		multiline: true,
		rows: 4,
		...messageField.properties,
	};

	const formIsValid =
		userField.validities.isValid &&
		emailField.validities.isValid &&
		phoneField.validities.isValid &&
		messageField.validities.isValid;

	const submitForm = (event) => {
		event.preventDefault();
		if (formIsValid) {
			userField.validities.reset();
			emailField.validities.reset();
			phoneField.validities.reset();
			return messageField.validities.reset();
		}
		userField.validities.raiseError();
		emailField.validities.raiseError();
		phoneField.validities.raiseError();
		return messageField.validities.raiseError();
	};

	const btnProps = {
		onClick: submitForm,
		type: "submit",
	};

	return (
		<div className={classes.formBox}>
			<form id="login-form">
				<CustomFormControl
					field={userField}
					IconBtnProps={{ disabled: true }}
					icon="AccountCircle"
				/>
				<CustomFormControl
					field={emailField}
					IconBtnProps={{ disabled: true }}
					icon="Email"
				/>
				<CustomFormControl
					field={phoneField}
					IconBtnProps={{ disabled: true }}
					icon="PhoneAndroid"
				/>
				<CustomFormControl
					field={messageField}
					IconBtnProps={{ disabled: true }}
					icon="Message"
				/>
				<CustomButton
					imgBtn
					label="Get in Touch now!"
					right={true}
					btnProps={btnProps}
				/>
			</form>
		</div>
	);
};

export default InfoForm;
