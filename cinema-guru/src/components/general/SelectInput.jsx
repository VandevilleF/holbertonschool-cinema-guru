import './general.css'

export default function SelectInput({ label, options, className, value, setValue }) {
	const handleSelect = (event) => {
		setValue(event.target.value)
	}
	const labelId = label.toLowerCase().replace(/\s+/g, '_');
	return (
		<>
		<label htmlFor={ labelId }>{ label }</label>
		<select
		id={ labelId }
		value={ value }
		className={ className }
		onChange={ handleSelect }>
			{options.map((option) => <option key={ option } value={ option }>{ option }</option>)}
		</select>
		</>
	)
}
