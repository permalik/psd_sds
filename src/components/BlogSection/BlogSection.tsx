import BlogCard from '../BlogCard';

import styles from '../../styles/BlogSection.module.css';

export default function BlogSection() {
	return (
		<section className={styles.blogSection}>
			<div className={styles.container}>
				<h2 className={styles.blogHeading}>from the blog</h2>
				<BlogCard
					blogImgAlt={'post image 1'}
					blogImg={'https://res.cloudinary.com/permalik/image/upload/v1649964221/sds_blog_img.jpg'}
					blogTitle={'title of a post'}
					blogParagraph={'Varius aonides sed mire promissios genetrix'}
					blogButton={'post1'}
				/>
				<BlogCard
					blogImgAlt={'post image 1'}
					blogImg={'https://res.cloudinary.com/permalik/image/upload/v1649964221/sds_blog_img.jpg'}
					blogTitle={'title of a post'}
					blogParagraph={'Varius aonides sed mire promissios genetrix'}
					blogButton={'post2'}
				/>
				<BlogCard
					blogImgAlt={'post image 1'}
					blogImg={'https://res.cloudinary.com/permalik/image/upload/v1649964221/sds_blog_img.jpg'}
					blogTitle={'title of a post'}
					blogParagraph={'Varius aonides sed mire promissios genetrix'}
					blogButton={'post3'}
				/>
			</div>
		</section>
	);
}