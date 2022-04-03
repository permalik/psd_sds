import Head from 'next/head';

import Hero from '../components/Hero';
import ServiceSection from '../components/ServiceSection/ServiceSection';

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
			<ServiceSection/>
		</div>
	);
}
