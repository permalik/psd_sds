import Head from 'next/head';
import Link from 'next/link';
// import styles from '../styles/Home.module.css';

export default function Index() {
	return (
		<div>
		{/*<div className={styles.container}>*/}
			<Head>
				<title>SDS</title>
				<meta name="description" content="Generated by create next app"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<h1>
				This is a test!!!
			</h1>
			<Link href={'/about'}>
				<a>
					About
				</a>
			</Link>
		</div>
	);
}
