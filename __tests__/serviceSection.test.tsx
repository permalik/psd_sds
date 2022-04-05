// Verify nav button text: 'Services'
import { render, screen } from '@testing-library/react';
import ServiceSection from '../src/components/ServiceSection';

describe('ServiceSection', () => {
	it('renders a heading', () => {
		render(<ServiceSection />);

		const photos = screen.getByRole('heading', {
			name: /photos/i,
		})

		expect(photos).toBeInTheDocument();
	});
});

describe('ServiceSection', () => {
	it('renders a heading', () => {
		render(<ServiceSection />);

		const videos = screen.getByRole('heading', {
			name: /videos/i,
		})

		expect(videos).toBeInTheDocument();
	});
});

describe('ServiceSection', () => {
	it('renders a heading', () => {
		render(<ServiceSection />);

		const downloads = screen.getByRole('heading', {
			name: /downloads/i,
		})

		expect(downloads).toBeInTheDocument();
	});
});