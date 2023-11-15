import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getAdminEmail } from "./AuthAPIManager";

export const Login = () => {
	const [email, set] = useState();
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();

		return getAdminEmail(email).then((foundAdmins) => {
			if (foundAdmins.length === 1) {
				const admin = foundAdmins[0];
				localStorage.setItem(
					"activeAdmin",
					JSON.stringify({
						id: admin.id,
					})
				);

				navigate("/");
			} else {
				window.alert("Invalid login");
			}
		});
	};

	return (
		<main className='container--login'>
			<section>
				<header className='App-header'>
					<h1>Welcome to CPR-tist</h1>
				</header>
				<form className='form--login' onSubmit={handleLogin}>
					<h2>Please sign in</h2>
					<fieldset>
						<label htmlFor='inputEmail'> Email address </label>
						<input
						id="inputEmail"
							type='email'
							onChange={(evt) => set(evt.target.value)}
							className='form-control'
							placeholder='Email address'
							required
							autoFocus
						/>
					</fieldset>
					<fieldset>
						<button type='submit'>Sign in</button>
					</fieldset>
				</form>
			</section>
			<section className='link--register'>
				<Link to='/register'>Not a member yet?</Link>
			</section>
		</main>
	);
};
