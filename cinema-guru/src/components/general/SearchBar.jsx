import './general.css'

export default function SearchBar({ title, setTitle }) {
	const handleInput = (event) => {
		setTitle(event.target.value)
	}
	return (
	<input type="search"
	value={ title }
	placeholder='Search Movies'
	onChange={ handleInput } />
	)
}
