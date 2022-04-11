import Button from '@mui/material/Button';
import * as React from 'react';
import { theme } from '../../../theme/mui';

export default function BlogCard(props: {blogTitle: any; blogParagraph: any; blogButton: any;}) {
	const blogTitle = props.blogTitle;
	const blogParagraph = props.blogParagraph;
	const blogButton = props.blogButton;

	return (
		<article>
			<h3>{blogTitle}</h3>
			<p>{blogParagraph}</p>
			<Button
				style={{ backgroundColor: theme.palette.secondary.main }}
				variant={'contained'}
			>
				{blogButton}
			</Button>
		</article>
	)
}