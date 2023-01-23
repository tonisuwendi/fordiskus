/**
 * - Register spec
 *  - should display register page correctly
 *  - should display toast error when email is not valid
 *  - should display toast error when email is already taken
 *  - should display toast error when password less than 6 characters
 *  - should display toast success and display loginpage when registration is successful
 */

describe('Register spec', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/register/');
    });

    it('should display register page correctly', () => {
        cy.get('#name').should('be.visible');
        cy.get('#email').should('be.visible');
        cy.get('#password').should('be.visible');
        cy.get('button').contains('DAFTAR').should('be.visible');
    });

    it('should display toast error when email is not valid', () => {
        cy.get('#name').type('tonsu');
        cy.get('#email').type('tonsu');
        cy.get('#password').type('123');
        cy.get('button').contains('DAFTAR').click();
        cy.get('.Toastify__toast-body').should('contain', '"email" must be a valid email');
    });

    it('should display toast error when email is already taken', () => {
        cy.get('#name').type('tonsu');
        cy.get('#email').type('tonsu@mail.com');
        cy.get('#password').type('123456');
        cy.get('button').contains('DAFTAR').click();
        cy.get('.Toastify__toast-body').should('contain', 'email is already taken');
    });

    it('should display toast error when password less than 6 characters', () => {
        cy.get('#name').type('tonsu');
        cy.get('#email').type('odkowkdolws@foekfoeidw.com');
        cy.get('#password').type('123');
        cy.get('button').contains('DAFTAR').click();
        cy.get('.Toastify__toast-body').should('contain', 'password must be at least 6 characters long');
    });

    it('should display toast success and display loginpage when registration is successful', () => {
        const randomEmail = `toni${+Date.now()}@mail.com`;
        cy.get('#name').type('Tonsu');
        cy.get('#email').type(randomEmail);
        cy.get('#password').type('123456');
        cy.get('button').contains('DAFTAR').click();
        cy.get('[data-test-id="login-page-title"]').contains('Selamat datang kembali').should('be.visible');
        cy.get('button').contains('MASUK').should('be.visible');
    });
});
