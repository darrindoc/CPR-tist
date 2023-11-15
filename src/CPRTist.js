import { Route, Routes } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { ApplicationViews } from "./views/AppView";
import { Authorized } from "./views/Authorized";


function CPRtist() {
	return (
		<Routes>
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route
				path='*'
				element={
					<Authorized>
						<>
							<ApplicationViews />
						</>
					</Authorized>
				}
			/>
		</Routes>
	);
}

export default CPRtist;
