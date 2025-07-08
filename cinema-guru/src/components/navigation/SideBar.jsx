import './navigation.css'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faStar, faClock } from '@fortawesome/free-solid-svg-icons'
import Activity from '../Activity'
import axios from 'axios'

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
				navigate("/home");
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
		const token = localStorage.getItem('accessToken');
		if (!token) return;

		axios.get('http://localhost:8000/api/activity', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		.then((response) => {
			setActivities(response.data);
		})
		.catch((error) => {
			console.error(error);
		})
	}, [activities])

	return (
		<>
		<nav className={`sidebar ${small ? 'small' : ''}`}
		onMouseEnter={() => setSmall(false)}
		onMouseLeave={() => setSmall(true)}>
			<ul className='navigation'>
				<li className={`page ${selected === 'Home' ? 'active' : ''}`} onClick={() => setPage("Home")}>
					<span><FontAwesomeIcon icon={ faFolder } /></span>
					<p>Home</p>
				</li>
				<li className={`page ${selected === 'Favorites' ? 'active' : ''}`} onClick={() => setPage("Favorites")}>
					<span><FontAwesomeIcon icon={ faStar } /></span>
					<p>Favorites</p>
				</li>
				<li className={`page ${selected === 'Watch Later' ? 'active' : ''}`} onClick={() => setPage("Watch Later")}>
					<span><FontAwesomeIcon icon={ faClock } /></span>
					<p>Watch Later</p>
				</li>
			</ul>
			<div className='activities'>
				<h3>Latest Activities</h3>
				<ul className='activities_list'>
					{activities.slice(0, 10).map((activity, index) => (
							<li key={index}><Activity activity={activity} /></li>
						))}
				</ul>
			</div>
		</nav>
		</>
	)
}
