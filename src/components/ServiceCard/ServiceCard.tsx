export default function ServiceCard(props: { serviceTitle: any; serviceSummary: any; serviceButton: any; }) {
	const serviceTitle = props.serviceTitle;
	const serviceSummary = props.serviceSummary;
	const serviceButton = props.serviceButton;

	return (
		<article>
			<div>
				<img />
			</div>
			<h3>{serviceTitle}</h3>
			<p>{serviceSummary}</p>
			<button>{serviceButton}</button>
		</article>
	);
};