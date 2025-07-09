import './dashboard.css'
import MovieCard from '../../components/movies/MovieCard'
import { useEffect, useState } from 'react'
import axios from 'axios';

export default function WatchLater() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const token = localStorage.getItem('accessToken');
		if (!token) return;

		axios.get('http://localhost:8000/api/titles/watchlater/', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		.then((response) => {
			const WatchLaterList = response.data;
			setMovies(WatchLaterList);
		})
		.catch((error) => {
			console.error(error);
		})
	})

	return (
		<div className='watchlater_page'>
			<h1>Movies you like</h1>
			<ul className='watchlater_movie'>
				{movies.map((movie) => <MovieCard key={movie.imdbId} movie={movie} />)}
			</ul>
		</div>
	)
}
