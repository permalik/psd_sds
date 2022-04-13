import ServiceCard from '../ServiceCard';

import styles from '../../styles/ServiceSection.module.css'

export default function ServiceSection() {
	return (
		<section className={styles.serviceSection}>
			<ServiceCard
				serviceTitle={'photos'}
				serviceSummary={'Varius aonides sed mire promissios genetrix varius varius'}
				serviceButton={'button1'}
			/>
			<ServiceCard
				serviceTitle={'videos'}
				serviceSummary={'Varius aonides sed mire promissios genetrix genetrix genetrix'}
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