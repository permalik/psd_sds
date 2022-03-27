import home from '../helpers/home';
import Hero from '../src/components/Hero';
import Index from '../src/pages';

describe('home test', () => {
	it('should show home', () => {
		expect(Hero).toContainHTML('<h1>This is a test!!!</h1>');
	})
})