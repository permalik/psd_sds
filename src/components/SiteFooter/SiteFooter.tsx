import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/SiteFooter.module.css';

export function SiteFooter() {
	return (
		<footer className={styles.siteFooter}>
			<section>
				<nav>
					<Link href={'#work-section'} passHref>
						<a>
							work
						</a>
					</Link>
					<Link href={'#about-section'} passHref>
						<a>
							about
						</a>
					</Link>
					<Link href={'#services-section'} passHref>
						<a>
							services
						</a>
					</Link>
					<Link href={'#blog-section'} passHref>
						<a>
							blog
						</a>
					</Link>
					<Link href={'#contact-section'} passHref>
						<a>
							contact
						</a>
					</Link>
				</nav>
				<div>
					(c) 2018 <span>name</span>. All rights reserved.
				</div>
			</section>
			<section>
				<nav>
					<Link href={'#'} passHref>
						<button>
							<img
								alt={'facebook icon'}
								height={50}
								src={'https://res.cloudinary.com/permalik/image/upload/v1649965535/icon_facebook.svg'}
								width={50}
							/>
						</button>
					</Link>
					<Link href={'#'} passHref>
						<button>
							<img
								alt={'twitter icon'}
								height={50}
								src={'https://res.cloudinary.com/permalik/image/upload/v1649965536/icon_twitter.svg'}
								width={50}
							/>
						</button>
					</Link>
					<Link href={'#'} passHref>
						<button>
							<img
								alt={'instagram icon'}
								height={50}
								src={'https://res.cloudinary.com/permalik/image/upload/v1649965536/icon_ig.svg'}
								width={50}
							/>
						</button>
					</Link>
				</nav>
			</section>
		</footer>
	);
};