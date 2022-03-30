// cypress/integration/app.spec.js

describe('Navigation', () => {
	it('should navigate to the index page', () => {
		// Start from the index page
		cy.visit('http://localhost:3000/');

		// Locate link with href={'/'} and click
		cy.get('a[href*="#work-section"]').click();

		// The new url should include "/"
		cy.url().should('include', '#work-section');

		// The new page should contain an h1 with "About page"
		// 	cy.get('h1').contains('About Page')
	});
});

const asModule = {};
export default asModule;