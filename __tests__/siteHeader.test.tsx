import { render, screen } from '@testing-library/react';
import SiteHeader from '../src/components/SiteHeader';
import '@testing-library/jest-dom';

// Verify logo button text: 'SDS'
describe('SiteHeader', () => {
	it('renders a button', () => {
		render(<SiteHeader />);

		const sds = screen.getByText('SDS');

		expect(sds).toBeInTheDocument();
	});
});

// Verify nav button text: 'Work'
describe('SiteHeader', () => {
	it('renders a button', () => {
		render(<SiteHeader />);

		const work = screen.getByText('work');

		expect(work).toBeInTheDocument();
	});
});

// Verify nav button text: 'About'
describe('SiteHeader', () => {
	it('renders a button', () => {
		render(<SiteHeader />);

		const about = screen.getByText('about');

		expect(about).toBeInTheDocument();
	});
});

// Verify nav button text: 'Services'
describe('SiteHeader', () => {
	it('renders a button', () => {
		render(<SiteHeader />);

		const services = screen.getByText('services');

		expect(services).toBeInTheDocument();
	});
});

// Verify nav button text: 'Blog'
describe('SiteHeader', () => {
	it('renders a button', () => {
		render(<SiteHeader />);

		const blog = screen.getByText('blog');

		expect(blog).toBeInTheDocument();
	});
});

// Verify nav button text: 'Contact'
describe('SiteHeader', () => {
	it('renders a button', () => {
		render(<SiteHeader />);

		const contact = screen.getByText('contact');

		expect(contact).toBeInTheDocument();
	});
});