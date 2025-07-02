import './navigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

export default function Header({ userUsername, setIsLoggedIn }) {
	const logout = () => {
		localStorage.setItem('accessToken', "")
		setIsLoggedIn(false)
	}
	return (
		<>
		<div className='navbar_content'>
			<p className='navbar_title'>Cinema Goru</p>
			<nav className='navbar'>
				<img src="https://picsum.photos/100/100" alt='profil picture'></img>
				<p>Welcome, { userUsername }</p>
				<span onClick={logout}><FontAwesomeIcon icon={ faRightFromBracket } /><p>Logout</p></span>
			</nav>
		</div>
		</>
	)
}
