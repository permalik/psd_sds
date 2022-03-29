import { render, screen } from '@testing-library/react';
import SiteHeader from '../src/components/SiteHeader';
import '@testing-library/jest-dom'

describe('SiteHeader', () => {
	it('renders a button', () => {
		render(<SiteHeader />)

		const button = screen.getByRole('button', {
			name: /SDS/i,
		})

		expect(button).toBeInTheDocument()
	})
})