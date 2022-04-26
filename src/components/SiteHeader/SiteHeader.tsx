import Image from 'next/image';
import Link from 'next/link';

import MenuIcon from '../MenuIcon';

import styles from '../../styles/SiteHeader.module.css';

export function SiteHeader() {
	return (
		<header className={styles.header}>
			<Link href={'/'} passHref>
				<a className={styles.homeButton}>
					SDS
				</a>
			</Link>
			<nav className={styles.navSection}>
				<Link href={'/#work-section'} passHref>
					<a className={styles.siteHeaderNavLink}>
						work
					</a>
				</Link>
				<Link href={'/#about-section'} passHref>
					<a className={styles.siteHeaderNavLink}>
						about
					</a>
				</Link>
				<Link href={'/#services-section'} passHref>
					<a className={styles.siteHeaderNavLink}>
						services
					</a>
				</Link>
				<Link href={'/#blog-section'} passHref>
					<a className={styles.siteHeaderNavLink}>
						blog
					</a>
				</Link>
				<Link href={'/#contact-section'} passHref>
					<a className={styles.siteHeaderNavLink}>
						contact
					</a>
				</Link>
			</nav>
			<button className={styles.searchButton}>
				<Image
					alt={'magnifying glass icon'}
					className={styles.searchButtonImage}
					height={30}
					src={'/noun-magnifying-glass-2921543.svg'}
					width={30}
				/>
			</button>
			<MenuIcon/>
		</header>
	);
};