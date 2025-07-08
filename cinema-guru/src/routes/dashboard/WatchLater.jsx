import './dashboard.css'
import MovieCard from '../../components/movies/MovieCard'
import { useEffect, useState } from 'react'
import axios from 'axios';

export default function WatchLater() {
	const [movies, setMovies] = useState([]);

	useEffect(async () => {
		const token = localStorage.getItem('accessToken');
		if (!token) return;
		try {
			const response = await axios.get('http://localhost:8000/api/titles/watchlater/', {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			const WatchLaterList = response.data;
			setMovies(WatchLaterList);
		} catch (error) {
			console.error(error);
		}
	})

	return (
		<div>
			<h1>Movies you like</h1>
			{movies.map((movie) => <MovieCard movie={movie} />)}
		</div>
	)
}
