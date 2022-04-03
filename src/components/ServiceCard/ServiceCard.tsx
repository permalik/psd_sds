export default function ServiceCard(props) {
	const serviceTitle = props.serviceTitle;
	const serviceSummary = props.serviceSummary;
	const serviceButton = props.serviceButton;

	return (
		<article>
			<div>
				<img />
			</div>
			<h2>{serviceTitle}</h2>
			<p>{serviceSummary}</p>
			<button>{serviceButton}</button>
		</article>
	);
};