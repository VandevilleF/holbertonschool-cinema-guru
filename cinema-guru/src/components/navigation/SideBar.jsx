import './navigation.css'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faStar, faClock } from '@fortawesome/free-solid-svg-icons'
import Activity from '../Activity'

export default function SideBar() {
	const [selected, setSelected] = useState("home");
	const [small, setSmall] = useState(true);
	const [activities, setActivities] = useState([]);
	const [showActivities, setShowActivities] = useState(false);
	const navigate = useNavigate();

	const setPage = (pageName) => {
		setSelected(pageName);
		switch(pageName) {
			case "Home":
				navigate("//home");
				break;
			case "Favorites":
				navigate("/favorites");
				break;
			case "Watch Later":
				navigate("/watchlater");
				break;
			default:
				break;
		}
	}
	useEffect(() => {
		axios.get('http://localhost:8000/api/activity')
		.then((response) => {
			setActivities(response.data);
		})
		.catch((error) => {
			console.error(error);
		})
	}, [])

	return (
		<>
		<nav className='sidebar'>
			<ul className='navigation'>
				<li className='page' onClick={() => setPage("Home")}>
					<span><FontAwesomeIcon icon={ faFolder } /></span>
					<p>Home</p>
				</li>
				<li className='page' onClick={() => setPage("Favorites")}>
					<span><FontAwesomeIcon icon={ faStar } /></span>
					<p>Favorites</p>
				</li>
				<li className='page' onClick={() => setPage("Watch Later")}>
					<span><FontAwesomeIcon icon={ faClock } /></span>
					<p>Watch Later</p>
				</li>
			</ul>
			<ul className='activity'>
				{activities.slice(0, 9).map((activity, index) => {
						<li key={index}><Activity activity={activity} /></li>
					})}
			</ul>
		</nav>
		</>
	)
}
