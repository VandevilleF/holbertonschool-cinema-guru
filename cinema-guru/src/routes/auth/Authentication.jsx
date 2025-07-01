import './auth.css'
import { useState } from 'react'
import Button from '../../components/general/Button'
import Login from './Login';
import Register from './Register';

 export default function Authentication({ setIsLoggedIn, setUserUsername }) {
	const [_switch, set_switch] = useState(true);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	return(
		<>
		<form onSubmit={(e) => e.preventDefault()} className='auth_form'>
			<div className='button_toggle'>
				<Button label="Sign In" className="button_panel" onClick={() => set_switch(true)} />
				<Button label="Sign Up" className="button_panel" onClick={() => set_switch(false)} />
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
