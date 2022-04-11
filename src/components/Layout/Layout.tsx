import SiteFooter from '../SiteFooter';
import SiteHeader from '../SiteHeader';

import styles from '../../styles/Layout.module.css';

export function Layout({ children }: { [key: string]: any }) {
	return (
		<div className={styles.container}>
			<SiteHeader />
			<main>{children}</main>
			<SiteFooter />
		</div>
	);
}
