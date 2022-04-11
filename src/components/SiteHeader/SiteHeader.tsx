import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/SiteHeader.module.css';

export function SiteHeader() {
	return (
		<header className={styles.header}>
			<Link href={'/'} passHref>
				<a className={styles.homeButton}>
					SDS
				</a>
			</Link>
			<nav>
				<Link href={'/#work-section'} passHref>
					<a>
						work
					</a>
				</Link>
				<Link href={'/#about-section'} passHref>
					<a>
						about
					</a>
				</Link>
				<Link href={'/#services-section'} passHref>
					<a>
						services
					</a>
				</Link>
				<Link href={'/#blog-section'} passHref>
					<a>
						blog
					</a>
				</Link>
				<Link href={'/#contact-section'} passHref>
					<a>
						contact
					</a>
				</Link>
			</nav>
			<button>
				<Image
					alt={'magnifying glass icon'}
					height={30}
					src={'/noun-magnifying-glass-2921543.svg'}
					width={30}
				/>
			</button>
		</header>
	);
};