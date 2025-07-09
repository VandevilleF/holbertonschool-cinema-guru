import './dashboard.css'
import MovieCard from '../../components/movies/MovieCard'
import { useEffect, useState } from 'react'
import axios from 'axios';

export default function Favorites() {
	const [movies, setMovies] = useState([]);


	useEffect(() => {
		const token = localStorage.getItem('accessToken');
		if (!token) return;

		axios.get('http://localhost:8000/api/titles/favorite/', {
			headers: {
					Authorization: `Bearer ${token}`
				}
		})
		.then((response) => setMovies(response.data))
		.catch((error) => console.error(error))
	}, [])
	return (
		<div className='fav_page'>
			<h1>Movies you like</h1>
			<ul className='favorite_movie'>
				{movies.map((movie) => (
					<MovieCard key={movie.imdbId} movie={movie} />
				))}
			</ul>
		</div>
	)
}
