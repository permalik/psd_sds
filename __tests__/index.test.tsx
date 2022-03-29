import { render, screen } from '@testing-library/react'
import Index from '../src/pages';
import '@testing-library/jest-dom'

describe('Home', () => {
	it('renders a heading', () => {
		render(<Index />)

		const heading = screen.getByRole('heading', {
			name: /Home Page/i,
		})

		expect(heading).toBeInTheDocument()
	})
})
