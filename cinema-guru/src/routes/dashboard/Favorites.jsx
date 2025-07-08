import './dashboard.css'
import MovieCard from '../../components/movies/MovieCard'
import { useEffect, useState } from 'react'
import axios from 'axios';

export default function Favorites() {
	const [movies, setMovies] = useState();

	const token = localStorage.getItem('accessToken');
	if (!token) return;

	useEffect(async () => {
		try {
			const response = await axios.get('http://localhost:8000/api/titles/favorite/', {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			favoritesMovies = response.data;
			setMovies(favoritesMovies);
		} catch (error) {
			console.error(error);
		}
	}, [])
	return (
		<div>
			<h>Movies you like</h>
			{movies.map((movie) => <MovieCard movie={movie} />)}
		</div>
	)
}
