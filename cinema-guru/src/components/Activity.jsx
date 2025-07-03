import './components.css'

export default function Activity({ activity }) {
	return (
		<li>
			<p>{username} added to {activity.toLowerCase()} {new Date().toDateString()}</p>
		</li>
	)
}
