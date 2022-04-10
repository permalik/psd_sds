import * as React from 'react';
import Button from '@mui/material/Button';

export default function Hero() {
	return (
		<section>
			<header>
				<h1>title of the page</h1>
				<p>subtitle</p>
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