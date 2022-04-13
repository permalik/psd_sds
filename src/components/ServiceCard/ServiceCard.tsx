import Button from '@mui/material/Button';
import * as React from 'react';
import { theme } from '../../../theme/mui';

import styles from '../../styles/ServiceCard.module.css';

export default function ServiceCard(props: {
	serviceImgAlt: any;
	serviceImg: any;
	serviceTitle: any;
	serviceSummary: any;
	serviceButton: any;
}) {
	const serviceImgAlt = props.serviceImgAlt;
	const serviceImg = props.serviceImg;
	const serviceTitle = props.serviceTitle;
	const serviceSummary = props.serviceSummary;
	const serviceButton = props.serviceButton;

	return (
		<article className={styles.serviceCard}>
			<div className={styles.serviceImgContainer}>
				<img
					alt={serviceImgAlt}
					className={styles.serviceImg}
					src={serviceImg}
				/>
			</div>
			<h3 className={styles.serviceHeading}>{serviceTitle}</h3>
			<p className={styles.serviceDescription}>{serviceSummary}</p>
			<Button
				variant={'contained'}
				style={{
					backgroundColor: theme.palette.secondary.main,
					borderRadius: '25px',
					padding: '.5rem 2rem',}}
			>
				{serviceButton}
			</Button>
		</article>
	);
};