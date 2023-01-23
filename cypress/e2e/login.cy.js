/**
 * - Login spec
 *  - should display login page correctly
 *  - should display toast error when email is not valid
 *  - should display toast error when email and password are wrong
 *  - should display homepage when email and password are correct
 */

describe('Login spec', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login/');
    });

    it('should display login page correctly', () => {
        cy.get('#email').should('be.visible');
        cy.get('#password').should('be.visible');
        cy.get('button').contains('MASUK').should('be.visible');
    });

    it('should display toast error when email is not valid', () => {
        cy.get('#email').type('dokqps');
        cy.get('#password').type('123');
        cy.get('button').contains('MASUK').click();
        cy.get('.Toastify__toast-body').should('contain', '"email" must be a valid email');
    });

    it('should display toast error when email is empty', () => {
        cy.get('#email').type('odkowkdolws@foekfoeidw.com');
        cy.get('#password').type('0w92djoks0qw2');
        cy.get('button').contains('MASUK').click();
        cy.get('.Toastify__toast-body').should('contain', 'email or password is wrong');
    });

    it('should display homepage when email and password are correct', () => {
        cy.get('#email').type('zuck@mail.com');
        cy.get('#password').type('zuck123');
        cy.get('button').contains('MASUK').click();
        cy.get('[data-test-id="create-info-title"]').contains('Mau diskusi apaan?').should('be.visible');
        cy.get('[data-test-id="categories-title"]').contains('Kategori Populer').should('be.visible');
    });
});
