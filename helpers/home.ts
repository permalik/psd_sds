import {render, screen} from '../test/test-utils';
import SiteHeader from '../src/components/SiteHeader';

export default function home(input: string) {
			const textToFind = 'SDS';

			render(<SiteHeader / >);

			expect(screen.getByRole('heading', {name: `It's ${textToFind}!`})).toBeInTheDocument()
}
