import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/SiteFooter.module.css';

export function SiteFooter() {
	return (
		<footer className={styles.siteFooter}>
			<section className={styles.footerMain}>
				<nav className={styles.footerNav}>
					<Link href={'#work-section'} passHref>
						<a className={styles.footerNavLink}>
							work
						</a>
					</Link>
					<Link href={'#about-section'} passHref>
						<a className={styles.footerNavLink}>
							about
						</a>
					</Link>
					<Link href={'#services-section'} passHref>
						<a className={styles.footerNavLink}>
							services
						</a>
					</Link>
					<Link href={'#blog-section'} passHref>
						<a className={styles.footerNavLink}>
							blog
						</a>
					</Link>
					<Link href={'#contact-section'} passHref>
						<a className={styles.footerNavLink}>
							contact
						</a>
					</Link>
				</nav>
				<div className={styles.footerCredit}>
					(c) 2018 <span className={styles.footerCreditName}>name</span>. All rights reserved.
				</div>
			</section>
			<section>
				<nav>
					<Link href={'#'} passHref>
						<button className={styles.footerSocialButton}>
							<img
								alt={'facebook icon'}
								className={styles.footerSocialImg}
								height={30}
								src={'https://res.cloudinary.com/permalik/image/upload/v1649965535/icon_facebook.svg'}
								width={30}
							/>
						</button>
					</Link>
					<Link href={'#'} passHref>
						<button className={styles.footerSocialButton}>
							<img
								alt={'twitter icon'}
								className={styles.footerSocialImg}
								height={30}
								src={'https://res.cloudinary.com/permalik/image/upload/v1649965536/icon_twitter.svg'}
								width={30}
							/>
						</button>
					</Link>
					<Link href={'#'} passHref>
						<button className={styles.footerSocialButton}>
							<img
								alt={'instagram icon'}
								className={styles.footerSocialImg}
								height={30}
								src={'https://res.cloudinary.com/permalik/image/upload/v1649965536/icon_ig.svg'}
								width={30}
							/>
						</button>
					</Link>
				</nav>
			</section>
		</footer>
	);
};