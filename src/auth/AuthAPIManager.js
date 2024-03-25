export const getAdminEmail = (email) => {
	return fetch(`http://localhost:8088/admins?email=${email}`).then((res) =>
		res.json()
	);
};

export const getAdminInfo = () => {
	return fetch(`http://localhost:8088/admins`).then((res) => 
		res.json()
	);
}

export const makeNewAdmin = (admin) => {
	return fetch("http://localhost:8088/admins", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(admin),
	});
};
