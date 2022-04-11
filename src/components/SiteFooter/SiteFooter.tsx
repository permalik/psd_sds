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
							<Image
								alt={'facebook icon'}
								height={50}
								src={'/vercel.svg'}
								width={50}
							/>
						</button>
					</Link>
					<Link href={'#'} passHref>
						<button>
							<Image
								alt={'twitter icon'}
								height={50}
								src={'/vercel.svg'}
								width={50}
							/>
						</button>
					</Link>
					<Link href={'#'} passHref>
						<button>
							<Image
								alt={'instagram icon'}
								height={50}
								src={'/vercel.svg'}
								width={50}
							/>
						</button>
					</Link>
				</nav>
			</section>
		</footer>
	);
};