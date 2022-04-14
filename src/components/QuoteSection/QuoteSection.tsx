import styles from '../../styles/QuoteSection.module.css';

export default function QuoteSection() {
	return (
		<section className={styles.quoteSection}>
			<div className={styles.quoteContainer}>
				<img
					alt={'quotation mark'}
					className={styles.quoteIcon}
					src={'https://res.cloudinary.com/permalik/image/upload/v1649957822/quote_svg.svg'}
				/>
				<p className={styles.quoteDescription}>Varius aonides sed mire promissios genetrix</p>
				<p className={styles.quoteCredit}>Jim Gordon (GCPD)</p>
			</div>
		</section>
	);
}