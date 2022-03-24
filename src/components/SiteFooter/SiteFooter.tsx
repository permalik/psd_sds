import Image from 'next/image';
import Link from 'next/link';

export function SiteFooter() {
	return (
		<footer>
			<section>
				<nav>
					<Link href={'work'} passHref>
						<button>
							work
						</button>
					</Link>
					<Link href={'about'} passHref>
						<button>
							about
						</button>
					</Link>
					<Link href={'services'} passHref>
						<button>
							services
						</button>
					</Link>
					<Link href={'blog'} passHref>
						<button>
							blog
						</button>
					</Link>
					<Link href={'contact'} passHref>
						<button>
							contact
						</button>
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