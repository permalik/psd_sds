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

describe('Navigation', () => {
	it('should navigate to the index page', () => {
		// Start from the index page
		cy.visit('http://localhost:3000/');

		// Locate link with href={'/'} and click
		cy.get('a[href*="#about-section"]').click();

		// The new url should include "/"
		cy.url().should('include', '#about-section');

		// The new page should contain an h1 with "About page"
		// 	cy.get('h1').contains('About Page')
	});
});

describe('Navigation', () => {
	it('should navigate to the index page', () => {
		// Start from the index page
		cy.visit('http://localhost:3000/');

		// Locate link with href={'/'} and click
		cy.get('a[href*="#services-section"]').click();

		// The new url should include "/"
		cy.url().should('include', '#services-section');

		// The new page should contain an h1 with "About page"
		// 	cy.get('h1').contains('About Page')
	});
});

describe('Navigation', () => {
	it('should navigate to the index page', () => {
		// Start from the index page
		cy.visit('http://localhost:3000/');

		// Locate link with href={'/'} and click
		cy.get('a[href*="#blog-section"]').click();

		// The new url should include "/"
		cy.url().should('include', '#blog-section');

		// The new page should contain an h1 with "About page"
		// 	cy.get('h1').contains('About Page')
	});
});

describe('Navigation', () => {
	it('should navigate to the index page', () => {
		// Start from the index page
		cy.visit('http://localhost:3000/');

		// Locate link with href={'/'} and click
		cy.get('a[href*="#contact-section"]').click();

		// The new url should include "/"
		cy.url().should('include', '#contact-section');

		// The new page should contain an h1 with "About page"
		// 	cy.get('h1').contains('About Page')
	});
});

const asModule = {};
export default asModule;