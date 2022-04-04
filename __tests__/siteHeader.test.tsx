import { render, screen } from '@testing-library/react';
import SiteHeader from '../src/components/SiteHeader';
import '@testing-library/jest-dom';

// Verify logo button text: 'SDS'
describe('SiteHeader', () => {
	it('renders a link', () => {
		render(<SiteHeader />);

		const sds = screen.getByText('SDS');

		expect(sds).toBeInTheDocument();
	});
});

// Verify nav button text: 'Work'
describe('SiteHeader', () => {
	it('renders a link', () => {
		render(<SiteHeader />);

		const work = screen.getByRole('link', {
			name: /work/i,
		})

		expect(work).toBeInTheDocument();
	});
});

// Verify nav button text: 'About'
describe('SiteHeader', () => {
	it('renders a link', () => {
		render(<SiteHeader />);

		const about = screen.getByRole('link', {
			name: /about/i,
		})

		expect(about).toBeInTheDocument();
	});
});

// Verify nav button text: 'Services'
describe('SiteHeader', () => {
	it('renders a link', () => {
		render(<SiteHeader />);

		const services = screen.getByRole('link', {
			name: /services/i,
		})

		expect(services).toBeInTheDocument();
	});
});

// Verify nav button text: 'Blog'
describe('SiteHeader', () => {
	it('renders a link', () => {
		render(<SiteHeader />);

		const blog = screen.getByRole('link', {
			name: /blog/i,
		})

		expect(blog).toBeInTheDocument();
	});
});

// Verify nav button text: 'Contact'
describe('SiteHeader', () => {
	it('renders a link', () => {
		render(<SiteHeader />);

		const contact = screen.getByRole('link', {
			name: /contact/i,
		})

		expect(contact).toBeInTheDocument();
	});
});