import { render, screen } from '@testing-library/react';
import QuoteSection from '../src/components/QuoteSection';

describe('Hero', () => {
	it('renders a paragraph', () => {
		render(<QuoteSection />);

		const paragraph = screen.getByText('Varius aonides sed mire promissios genetrix');

		expect(paragraph).toBeInTheDocument();
	});
});