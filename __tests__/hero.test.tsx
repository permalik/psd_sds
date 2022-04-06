import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Hero from '../src/components/Hero';

// Verify logo button text: 'SDS'
describe('Hero', () => {
	it('renders a heading', () => {
		render(<Hero />);

		const heading = screen.getByRole('heading', {
			name: /title of the page/i,
		});

		expect(heading).toBeInTheDocument();
	});
});

describe('Hero', () => {
	it('renders a paragraph', () => {
		render(<Hero />);

		const paragraph = screen.getByText('subtitle');

		expect(paragraph).toBeInTheDocument();
	});
});

describe('Hero', () => {
	it('renders a paragraph', () => {
		render(<Hero />);

		const paragraphTwo = screen.getByText('Varius aonides sed mire promissios genetrix');

		expect(paragraphTwo).toBeInTheDocument();
	});
});

describe('Hero', () => {
	it('renders a button', () => {
		render(<Hero />);

		const button = screen.getByRole('button', {
			name: /button/i,
		});

		expect(button).toBeInTheDocument();
	});
});