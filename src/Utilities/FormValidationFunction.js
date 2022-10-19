export const validateText = (value, name = "") => {
	if (!value.trim())
		return {
			validity: value.trim() !== "",
			message: `${name} is required`,
		};
	return {
		validity: value.trim() !== "",
		message: "Looks good!",
	};
};

export const validateEmail = (email, name = "") => {
	const regExp =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	email = email.trim();
	const validity = regExp.test(email);
	if (validity)
		return {
			validity,
			message: "Looks good!",
		};
	return {
		validity,
		message: "Valid email required!",
	};
};

export const validatePhNumber = (number, name = "") => {
	const regExp = /^[0-9]*$/;
	number = number.trim();
	const validity = number.length === 10 && regExp.test(number);
	if (validity)
		return {
			validity,
			message: "Looks good!",
		};
	return {
		validity,
		message: "Valid phone number required!",
	};
};
