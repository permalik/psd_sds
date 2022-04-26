import { useState } from 'react';

import styles from '../../styles/MenuIcon.module.css';

export default function MenuIcon() {
	const [isActive, setActive] = useState(false);

	const toggleClass = () => {
		setActive(!isActive);
	};

	return (
		<button
			className={`
			${styles.hamburger}
			${isActive ? styles.hamburgerSqueeze : null}
			${isActive ? styles.isActive : null}
			`}
			onClick={toggleClass}
		>
			<span className={styles.hamburgerBox}>
				<span className={styles.hamburgerInner} />
			</span>
		</button>
	);
}