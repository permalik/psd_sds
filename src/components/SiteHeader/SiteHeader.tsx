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
				<Link href={'/work'} passHref>
					<button>
						work
					</button>
				</Link>
				<Link href={'/about'} passHref>
					<button>
						about
					</button>
				</Link>
				<Link href={'/services'} passHref>
					<button>
						services
					</button>
				</Link>
				<Link href={'/blog'} passHref>
					<button>
						blog
					</button>
				</Link>
				<Link href={'/contact'} passHref>
					<button>
						contact
					</button>
				</Link>
			</nav>
			<button>
				<Image
					height={30}
					src={'/noun-magnifying-glass-2921543.svg'}
					width={30}
				/>
			</button>
		</header>
	);
};