import Head from 'next/head';

import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';

import styles from '../styles/Home.module.css';

export default function Index() {

	return (
		<div className={styles.container}>
			<Head>
				<title>SDS</title>
				<meta name="description" content="Generated by create next app"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<Hero/>
			<ServiceCard {} />
		</div>
	);
}
