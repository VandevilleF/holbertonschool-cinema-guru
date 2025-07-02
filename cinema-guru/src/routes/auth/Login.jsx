import './auth.css'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/general/Button'
import Input from '../../components/general/Input'

export default function Login({ username, password, setUsername, setPassword }) {
	return (
		<>
		<h3>Sign in with your account</h3>
		<Input label="Username:" type="text"
		className="input_content" value={ username }
		setValue={ setUsername } icon={faUser} />
		<Input label="Password:" type="password"
		className="input_content" value={ password }
		setValue={ setPassword } icon={faKey} />
		<Button label="Sign In" className="auth_button"
		icon={faKey}
		type ="submit" />
		</>
	)
};
