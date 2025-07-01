import './general.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Input({ label, type, className, value, setValue, icon, inputAttributes }) {
	const handleInput = (event) => {
		setValue(event.target.value)
	}
	const labelId = label.toLowerCase()
	.replace(/[^\w\s]|_/g, '')
	.replace(/\s+/g, '_');

	return (
		<>
		<div className='label_block'>
		{icon && <span><FontAwesomeIcon icon={icon} /></span> }
		<label htmlFor={ labelId }>{ label }</label>
		</div>
		<input id={ labelId }
		type={ type }
		className={ className }
		value={ value }
		{ ...inputAttributes }
		onChange={ handleInput } />
		</>
	);
};
