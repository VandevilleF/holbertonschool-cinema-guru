import './dashboard.css'
import Button from'../../components/general/Button'
import Filter from '../../components/movies/Filter'
import MovieCard from '../../components/movies/MovieCard'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Tag from '../../components/movies/Tag'

export default function HomePage() {
	const [movies, setMovies] = useState([]);
	const [minYear, setMinYear] = useState(1970);
	const [maxYear, setMaxYear] = useState(2022);
	const [genres, setGenres] = useState([]);
	const [sort, setSort] = useState("");
	const [title, setTitle] = useState("");
	const [page, setPage] = useState(1);

	const token = localStorage.getItem('accessToken');

	const loadMovies = async (page) => {
		try {
			const response = await axios.get('http://localhost:8000/api/titles/advancedsearch', {
				params: {
					minYear,
					maxYear,
					genres: genres.join(','),
					title,
					sort,
					page
				},
				headers: {
					Authorization: `Bearer ${token}`
				}
			})

			const moviesList = response.data.titles;
			setMovies(moviesList);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		setMovies([]);
		loadMovies(1);
	}, [minYear, maxYear, genres, title, sort])

	const handleLoadPage = () => {
		const nextPage = page + 1;
		setPage(nextPage);
		loadMovies(nextPage);
	}

	return (
		<div className='home_content'>
			<div className='filter_container'>
				<Filter minYear={minYear} setMinYear={setMinYear}
				maxYear={maxYear} setMaxYear={setMaxYear}
				sort={sort} setSort={setSort}
				genres={genres} setGenres={setGenres}
				title={title} setTitle={setTitle} />
			</div>
			<div className='display_movies'>
				{movies.map((movie) => <MovieCard key={movie.imdbId} movie={movie} />)}
			</div>
			<Button label="Load More.." className="load_button" onClick={handleLoadPage} type='button' />
		</div>
	)
}
