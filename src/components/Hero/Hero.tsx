import * as React from 'react';
import Button from '@mui/material/Button';

import styles from '../../styles/Hero.module.css';
import { theme } from '../../../theme/mui';

export default function Hero() {
	return (
		<section className={styles.heroSection}>
			<div className={styles.container}>
				<header className={styles.header}>
					<h1 className={styles.title}>title of the page</h1>
					<p className={styles.subtitle}>subtitle</p>
				</header>
				<p className={styles.heroDescription}>Varius aonides sed mire promissios genetrix</p>
				<Button
					style={{
						backgroundColor: theme.palette.secondary.main,
						borderRadius: '25px',
						padding: '.5rem 2rem',
					}}
					variant={'contained'}
				>
					button
				</Button>
			</div>
		</section>
	);
};