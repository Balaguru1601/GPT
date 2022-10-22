import { useState } from "react";

const useInput = (
	descriptors = { type: "", name: "", label: "" },
	validationFunction
) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [inpWasTouched, setInpwasTouched] = useState(false);

	const { validity: valueIsValid, message } = validationFunction(
		enteredValue,
		descriptors.label
	);
	const valueIsInvalid = inpWasTouched && !valueIsValid;

	const updateValue = (event) => {
		setEnteredValue((prevState) => event.target.value);
	};

	const inputBlurHandler = () => {
		setInpwasTouched((prevState) => true);
	};

	const resetInput = () => {
		setEnteredValue((prevState) => "");
		setInpwasTouched((prevState) => false);
	};

	const raiseError = () => {
		setEnteredValue((prev) => "");
		setInpwasTouched((prev) => true);
	};

	return {
		properties: {
			name: descriptors.name,
			type: descriptors.type,
			id: descriptors.name,
			value: enteredValue,
			label: descriptors.label,
			onChange: updateValue,
			onBlur: inputBlurHandler,
		},
		validities: {
			isInvalid: valueIsInvalid,
			isValid: valueIsValid,
			reset: resetInput,
			label: descriptors.label,
			message: message,
			raiseError: raiseError,
		},
	};
};

export default useInput;
