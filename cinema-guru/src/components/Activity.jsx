import './components.css'

export default function Activity({ activity }) {
	const username = activity.user.username
	const title = activity.title.title
	const activityType = activity.activityType

	return (
		<li className='activity'>
			<p>
				<span>{username}</span> added <span>{title}</span> to {activityType.toLowerCase()} - {new Date().toDateString()}
			</p>
		</li>
	)
}
