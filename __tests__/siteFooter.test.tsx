// Verify nav button text: 'Work'
import { render, screen } from '@testing-library/react';
import SiteFooter from '../src/components/SiteFooter';

describe('SiteFooter', () => {
	it('renders a link', () => {
		render(<SiteFooter />)

		const link = screen.getByRole('link', {
			name: /work/i,
		})

		expect(link).toBeInTheDocument()
	})
})