import ServiceCard from '../ServiceCard';

export default function ServiceSection() {
	return (
		<section>
			<ServiceCard
				serviceTitle={'photos'}
				serviceSummary={'Varius aonides sed mire promissios genetrix'}
				serviceButton={'button'}
			/>
			<ServiceCard
				serviceTitle={'videos'}
				serviceSummary={'Varius aonides sed mire promissios genetrix'}
				serviceButton={'button'}
			/>
			<ServiceCard
				serviceTitle={'downloads'}
				serviceSummary={'Varius aonides sed mire promissios genetrix'}
				serviceButton={'button'}
			/>
		</section>
	)
}