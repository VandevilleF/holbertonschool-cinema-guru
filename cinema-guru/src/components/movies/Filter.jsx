import './movies.css'
import SearchBar from '../general/SearchBar'
import Input from '../general/Input'
import SelectInput from '../general/SelectInput'
import Tag from './Tag'

export default function Filter({ minYear, setMinYear, maxYear, setMaxYear, sort, setSort, genres, setGenres, title, setTitle }) {
	const moviesGenres = [ "action", "drama", "comedy", "biography", "romance", "thriller", "war", "history", "sport", "sci-fi", "documentary", "crime", "fantasy"];
	return (
		<>
		<div className='container'>
			<div className='filter_homepage'>
				<div className='searchbar'>
					<SearchBar title={title} setTitle={setTitle} />
				</div>
				<div className='specfic_filter'>
					<div className='filter'>
						<Input label="Min Date:" type="number" className="input_date"
						value={minYear} setValue={setMinYear} />
					</div>
					<div className='filter'>
						<Input label="Max Date:" type="number" className="input_date"
						value={maxYear} setValue={setMaxYear} />
					</div>
					<div className='filter'>
						<SelectInput label="Sort:" options={["latest", "oldest", "highestrated", "lowestrated"]}
						value={sort} setValue={setSort} />
					</div>
				</div>
			</div>
			<div className='tags'>
				<ul className='tag_filter'>
					{moviesGenres.map((genre) => (
						<Tag key={genre} genre={genre} filter={true} genres={genres} setGenres={setGenres} />
					))}
				</ul>
			</div>
		</div>
		</>
	)
}
