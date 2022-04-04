// Verify nav button text: 'Work'
import { render, screen } from '@testing-library/react';
import SiteFooter from '../src/components/SiteFooter';

describe('SiteFooter', () => {
	it('renders a link', () => {
		render(<SiteFooter />)

		const work = screen.getByRole('link', {
			name: /work/i,
		})

		expect(work).toBeInTheDocument()
	})
})

describe('SiteFooter', () => {
	it('renders a link', () => {
		render(<SiteFooter />)

		const about = screen.getByRole('link', {
			name: /about/i,
		})

		expect(about).toBeInTheDocument()
	})
})

describe('SiteFooter', () => {
	it('renders a link', () => {
		render(<SiteFooter />)

		const services = screen.getByRole('link', {
			name: /services/i,
		})

		expect(services).toBeInTheDocument()
	})
})

describe('SiteFooter', () => {
	it('renders a link', () => {
		render(<SiteFooter />)

		const blog = screen.getByRole('link', {
			name: /blog/i,
		})

		expect(blog).toBeInTheDocument()
	})
})

describe('SiteFooter', () => {
	it('renders a link', () => {
		render(<SiteFooter />)

		const contact = screen.getByRole('link', {
			name: /contact/i,
		})

		expect(contact).toBeInTheDocument()
	})
})

describe('SiteFooter', () => {
	it('renders a div', () => {
		render(<SiteFooter/>)

		const copyright = screen.getByText('(c) 2018 . All rights reserved.')

		expect(copyright).toBeInTheDocument()
	})
	}
)

describe('SiteFooter', () => {
		it('renders a span', () => {
			render(<SiteFooter/>)

			const name = screen.getByText('name')

			expect(name).toBeInTheDocument()
		})
	}
)