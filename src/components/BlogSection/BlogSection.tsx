import BlogCard from '../BlogCard';

export default function BlogSection() {
	return (
		<section>
			<h2>from the blog</h2>
			<BlogCard
				blogTitle={'title of a post'}
				blogParagraph={'Varius aonides sed mire promissios genetrix'}
				blogButton={'post1'}
			/>
			<BlogCard
				blogTitle={'title of a post'}
				blogParagraph={'Varius aonides sed mire promissios genetrix'}
				blogButton={'post2'}
			/>
			<BlogCard
				blogTitle={'title of a post'}
				blogParagraph={'Varius aonides sed mire promissios genetrix'}
				blogButton={'post3'}
			/>
		</section>
	)
}