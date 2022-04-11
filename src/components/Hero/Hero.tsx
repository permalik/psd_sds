import * as React from 'react';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';

import styles from '../../styles/Hero.module.css'

const theme = createTheme({
	palette: {
		secondary: {
			main: '#76D796'
		}
	}
})

export default function Hero() {
	return (
		<section className={styles.heroSection}>
			<header>
				<h1 className={styles.title}>title of the page</h1>
				<p className={styles.subtitle}>subtitle</p>
			</header>
			<p>Varius aonides sed mire promissios genetrix</p>
			<Button
				style={{ backgroundColor: theme.palette.secondary.main }}
				variant={'contained'}
			>
				button
			</Button>
		</section>
	);
};