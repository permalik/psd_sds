import ServiceCard from '../ServiceCard';

export default function ServiceSection() {
	return (
		<section>
			<ServiceCard
				serviceTitle={'photos'}
				serviceSummary={'Varius aonides sed mire promissios genetrix'}
				serviceButton={'button1'}
			/>
			<ServiceCard
				serviceTitle={'videos'}
				serviceSummary={'Varius aonides sed mire promissios genetrix varius'}
				serviceButton={'button2'}
			/>
			<ServiceCard
				serviceTitle={'downloads'}
				serviceSummary={'Varius aonides sed mire promissios genetrix varius aonides'}
				serviceButton={'button3'}
			/>
		</section>
	)
}