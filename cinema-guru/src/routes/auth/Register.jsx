import './auth.css'
import Button from '../../components/general/Button'
import Input from '../../components/general/Input'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';

export default function Register({ username, password, setUsername, setPassword }) {
const handleSubmit = (event) => {
		event.preventDefault()
	}
	return (
		<>
		<h3>Create a new account</h3>
		<Input label="Username:" type="text"
		className="input_content" value={ username }
		setValue={ setUsername } icon={faUser} />
		<Input label="Password:" type="password"
		className="input_content" value={ password }
		setValue={ setPassword } icon={faKey} />
		<Button label="Sign Up" className="auth_button"
		onClick={handleSubmit} icon={faKey} />
		</>
	)
};
