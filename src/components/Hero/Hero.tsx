import * as React from 'react';
import Button from '@mui/material/Button';

import styles from '../../styles/Hero.module.css'

export default function Hero() {
	return (
		<section className={styles.heroSection}>
			<header>
				<h1 className={styles.title}>title of the page</h1>
				<p className={styles.subtitle}>subtitle</p>
			</header>
			<p>Varius aonides sed mire promissios genetrix</p>
			<Button
				color={'success'}
				variant={'contained'}
			>
				button
			</Button>
		</section>
	);
};