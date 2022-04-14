import Button from '@mui/material/Button';
import * as React from 'react';
import { theme } from '../../../theme/mui';

import styles from '../../styles/BlogCard.module.css';

export default function BlogCard(props: { blogImgAlt: any; blogImg: any; blogTitle: any; blogParagraph: any; blogButton: any; }) {
	const blogImg = props.blogImg;
	const blogImgAlt = props.blogImgAlt;
	const blogTitle = props.blogTitle;
	const blogParagraph = props.blogParagraph;
	const blogButton = props.blogButton;

	return (
		<article className={styles.blogArticle}>
			<img
				alt={blogImgAlt}
				className={styles.blogImg}
				src={blogImg}
			/>
			<div>
				<h3 className={styles.blogTitle}>{blogTitle}</h3>
				<p>{blogParagraph}</p>
				<Button
					style={{
						backgroundColor: theme.palette.secondary.main,
						borderRadius: '25px',
						padding: '.5rem 2rem',
					}}
					variant={'contained'}
				>
					{blogButton}
				</Button>
			</div>
		</article>
	);
}