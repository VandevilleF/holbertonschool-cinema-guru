import './auth.css'
import { useState } from 'react'
import Button from '../../components/general/Button'
import Login from './Login';
import Register from './Register';
import axios from 'axios';

 export default function Authentication({ setIsLoggedIn, setUserUsername }) {
	const [_switch, set_switch] = useState(true);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const route = _switch ? 'http://localhost:8000/api/auth/login' : 'http://localhost:8000/api/auth/register';
			const response = await axios.post(route, {
				username,
				password
			})
			const token = response.data.accessToken
			localStorage.setItem('accessToken', token)
			setUserUsername(username);
			setIsLoggedIn(true);
			console.log("axios fini")
		} catch(err) {
			console.error(err);
		}
	}

	return(
		<>
		<form onSubmit={handleSubmit} className='auth_form'>
			<div className='button_toggle'>
				<Button label="Sign In" className="button_panel"
				onClick={() => set_switch(true)} type ="button" />
				<Button label="Sign Up" className="button_panel"
				onClick={() => set_switch(false)} type ="button" />
			</div>
			<div className='auth_inputs'>
				{_switch ? (
					<Login username={username} password={password}
					setUsername={setUsername} setPassword={setPassword} />
				) : (
					<Register username={username} password={password}
					setUsername={setUsername} setPassword={setPassword} />
				)}
			</div>
		</form>
		</>
	)
}
