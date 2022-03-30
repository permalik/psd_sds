import { render, screen } from '@testing-library/react';
import SiteHeader from '../src/components/SiteHeader';
import '@testing-library/jest-dom'

// Verify logo button text: 'SDS'
describe('SiteHeader', () => {
	it('renders a button', () => {
		render(<SiteHeader />)

		const button = screen.getByRole('button', {
			name: /SDS/i,
		})

		expect(button).toBeInTheDocument()
	})
})

// Verify nav button text: 'Work'
describe('SiteHeader', () => {
	it('renders a button', () => {
		render(<SiteHeader />)

		const button = screen.getByRole('button', {
			name: /Work/i,
		})

		expect(button).toBeInTheDocument()
	})
})

// Verify nav button text: 'About'
describe('SiteHeader', () => {
	it('renders a button', () => {
		render(<SiteHeader />)

		const button = screen.getByRole('button', {
			name: /About/i,
		})

		expect(button).toBeInTheDocument()
	})
})

// Verify nav button text: 'Services'
describe('SiteHeader', () => {
	it('renders a button', () => {
		render(<SiteHeader />)

		const button = screen.getByRole('button', {
			name: /Services/i,
		})

		expect(button).toBeInTheDocument()
	})
})

// Verify nav button text: 'Blog'
describe('SiteHeader', () => {
	it('renders a button', () => {
		render(<SiteHeader />)

		const button = screen.getByRole('button', {
			name: /Blog/i,
		})

		expect(button).toBeInTheDocument()
	})
})

// Verify nav button text: 'Contact'
describe('SiteHeader', () => {
	it('renders a button', () => {
		render(<SiteHeader />)

		const button = screen.getByRole('button', {
			name: /Contact/i,
		})

		expect(button).toBeInTheDocument()
	})
})