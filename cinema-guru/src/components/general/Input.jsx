import './general.css'

export default function Input({ label, type, className, value, setValue, icon, inputAttributes }) {
	const handleInput = (event) => {
		setValue(event.target.value)
	}
	const labelId = label.toLowerCase().replace(/\s+/g, '_');

	return (
		<>
		{icon && <span>{ icon }</span> }
		<label htmlFor={ labelId }>{ label }</label>
		<input id={ labelId }
		type={ type }
		className={ className }
		value={ value }
		{ ...inputAttributes }
		onChange={ handleInput } />
		</>
	);
};
