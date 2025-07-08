import './movies.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faClock, faS, faL } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import axios from 'axios';


export default function MovieCard({ movie }) {
	const [isFavorite, setIsFavorite] = useState(false);
	const [isWatchLater, setIsWatchLater] = useState(false);


	useEffect(() => {
		const fetchList = async() => {
			const token = localStorage.getItem('accessToken');
			if (!token) return;

			try {
				const [favoritesResponse, watchLaterResponse] = await Promise.all([
					axios.get('http://localhost:8000/api/titles/favorite/', {
						headers: {
							Authorization: `Bearer ${token}`
						}
					}),
					axios.get('http://localhost:8000/api/titles/watchlater/', {
						headers: {
							Authorization: `Bearer ${token}`
						}
					})
				])
				const favoriteList = favoritesResponse.data;
				const watchLater = watchLaterResponse.data;

				setIsFavorite(favoriteList.some(item => item.id === movie.imdbId));
				setIsWatchLater(watchLater.some(item => item.id === movie.imdbId));
			} catch (error) {
				console.error(error);
			}
		}
		fetchList();
	}, [movie]);

	const handleClick = async (type) => {
		if (!movie?.imdbId) return;

		const token = localStorage.getItem('accessToken');
		if (!token) return;
		const headers = {
			Authorization: `Bearer ${token}`
		}
		const isTypeFavorite = type === "favorite";
		const isSelected = isTypeFavorite ? isFavorite : isWatchLater;

		const url = `http://localhost:8000/api/titles/${type}/${movie.imdbId}`

		try {
			if (isSelected) {
				await axios.delete(url, { headers });
			} else {
				await axios.post(url, {}, { headers });
			}

			if (isTypeFavorite) {
				setIsFavorite(!isFavorite);
			} else {
				setIsWatchLater(!isWatchLater);
			}
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<li className='movie_card'>
			<div className='icons'>
				<FontAwesomeIcon onClick={() => handleClick("watchlater")} icon={ faClock } />
				<FontAwesomeIcon onClick={() => handleClick("favorite")} icon={ faStar } />
			</div>
			<div className='movie_info'>
				<img src={movie.imageurls?.[0] || '/default_image.png'}
				alt={movie.title}
				onError={(e) => {
					e.target.onerror = null;
					e.target.src = '/default_image.png';
				}}
				/>
				<div className='informations'>
					<h3>{movie.title}</h3>
					<p>{movie.synopsis}</p>
					<ul className='movie_genres'>
						{movie.genres.map((genre, index) => (
							<li key={index} className='genre'>{genre}</li>
						))}
					</ul>
				</div>
			</div>
		</li>
	)
}
