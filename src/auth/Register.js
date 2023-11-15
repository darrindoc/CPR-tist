import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeNewAdmin } from "./AuthAPIManager";

export const Register = (props) => {
	const [admin, setAdmin] = useState({
		firstName: "",
		lastName: "",
        title: "",
        email: "",
        password: "",
	});
	let navigate = useNavigate();

	const registerNewAdmin = () => {
		return makeNewAdmin(admin)
			.then((res) => res.json())
			.then((createdAdmin) => {
				if (createdAdmin.hasOwnProperty("id")) {
					localStorage.setItem(
						"activeAdmin",
						JSON.stringify({
							id: createdAdmin.id,
                            firstName: "",
                            lastName: "",
                            title: "",
                            email: "",
                            password: "",
						})
					);

					navigate("/");
				}
			});
	};

	const handleRegister = (e) => {
		e.preventDefault();
		return fetch(`http://localhost:8088/admins?email=${admin.email}`)
			.then((res) => res.json())
			.then((response) => {
				if (response.length > 0) {
					// Duplicate email. No good.
					window.alert("Account with that email address already exists");
				} else {
					// Good email, create user.
					registerNewAdmin();
				}
			});
	};

	const updateAdmin = (evt) => {
		const copy = { ...admin };
		copy[evt.target.id] = evt.target.value;
		setAdmin(copy);
	};

	return (
		<main style={{ textAlign: "center" }}>
			<form className='form--login' onSubmit={handleRegister}>
				<h1 className='h3 mb-3 font-weight-normal'>
					Please Register for CPR-tist
				</h1>
				<fieldset>
					<label htmlFor='firstName'> First Name </label>
					<input
						onChange={updateAdmin}
						type='text'
						id='firstName'
						className='form-control'
						placeholder='Enter your first name'
						required
						autoFocus
					/>
				</fieldset>
                <fieldset>
					<label htmlFor='lastName'> Last Name </label>
					<input
						onChange={updateAdmin}
						type='text'
						id='lastName'
						className='form-control'
						placeholder='Enter your last name'
						required
						autoFocus
					/>
				</fieldset>
                <fieldset>
					<label htmlFor='title'> Title </label>
					<input
						onChange={updateAdmin}
						type='text'
						id='title'
						className='form-control'
						placeholder='Title'
						required
					/>
				</fieldset>
				<fieldset>
					<label htmlFor='email'> Email address </label>
					<input
						onChange={updateAdmin}
						type='email'
						id='email'
						className='form-control'
						placeholder='Email address'
						required
					/>
				</fieldset>
				<fieldset>
					<label htmlFor='password'> Password </label>
					<input
						onChange={updateAdmin}
						type='text'
						id='password'
						className='form-control'
						placeholder='Create password'
						required
					/>
				</fieldset>

				<fieldset>
					<button type='submit'> Register </button>
				</fieldset>
			</form>
		</main>
	);
};
