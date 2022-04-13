import ServiceCard from '../ServiceCard';

import styles from '../../styles/ServiceSection.module.css'

export default function ServiceSection() {
	return (
		<section className={styles.serviceSection}>
			<ServiceCard
				serviceImgAlt={'photo icon'}
				serviceImg={'https://res.cloudinary.com/permalik/image/upload/v1649859010/photo_svg.svg'}
				serviceTitle={'photos'}
				serviceSummary={'Varius aonides sed mire promissios genetrix varius varius'}
				serviceButton={'button1'}
			/>
			<ServiceCard
				serviceImgAlt={'video icon'}
				serviceImg={'https://res.cloudinary.com/permalik/image/upload/v1649859009/video_svg.svg'}
				serviceTitle={'videos'}
				serviceSummary={'Varius aonides sed mire promissios genetrix genetrix genetrix'}
				serviceButton={'button2'}
			/>
			<ServiceCard
				serviceImgAlt={'download icon'}
				serviceImg={'https://res.cloudinary.com/permalik/image/upload/v1649859009/download_svg.svg'}
				serviceTitle={'downloads'}
				serviceSummary={'Varius aonides sed mire promissios genetrix varius aonides'}
				serviceButton={'button3'}
			/>
		</section>
	)
}