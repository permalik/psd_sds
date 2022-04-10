export default function BlogCard(props: {blogTitle: any; blogParagraph: any; blogButton: any;}) {
	const blogTitle = props.blogTitle;
	const blogParagraph = props.blogParagraph;
	const blogButton = props.blogButton;

	return (
		<article>
			<h3>{blogTitle}</h3>
			<p>{blogParagraph}</p>
			<button>{blogButton}</button>
		</article>
	)
}