import home from '../helpers/home';
import Hero from '../src/components/Hero';

describe('home test', () => {
	it('should show home', () => {
		expect(Hero).toContainHTML('<h1>title of the page</h1>');
	})
})