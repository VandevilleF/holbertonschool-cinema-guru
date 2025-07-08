import './dashboard.css'
import Header from '../../components/navigation/Header'
import SideBar from '../../components/navigation/SideBar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './HomePage'
import Favorites from './Favorites'
import WatchLater from './WatchLater'

export default function Dashboard({ userUsername, setIsLoggedIn }) {
	return (
		<BrowserRouter>
			<div className='header'>
				<Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
			</div>
			<div className='sidebar_container'>
				<SideBar />
			</div>
			<Routes>
				<Route path='/home' element={<HomePage />} />
				<Route path='/favorites' element={<Favorites />} />
				<Route path='/watchlater' element={<WatchLater />} />
				<Route path='*' element={<Navigate to="/home" />} />
			</Routes>
		</BrowserRouter>
	)
}
