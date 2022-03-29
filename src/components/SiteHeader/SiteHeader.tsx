import Image from 'next/image';
import Link from "next/link";

export function SiteHeader() {
	return (
		<header>
			<Link href={'/'} passHref>
				<button>
					SDS
				</button>
			</Link>
			<nav>
				<Link href={'/#work-section'} passHref>
					<button>
						work
					</button>
				</Link>
				<Link href={'/#about-section'} passHref>
					<button>
						about
					</button>
				</Link>
				<Link href={'/#services-section'} passHref>
					<button>
						services
					</button>
				</Link>
				<Link href={'/#blog-section'} passHref>
					<button>
						blog
					</button>
				</Link>
				<Link href={'/#contact-section'} passHref>
					<button>
						contact
					</button>
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