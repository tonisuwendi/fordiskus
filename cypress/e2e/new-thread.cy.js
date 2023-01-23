/**
 * - New Thread spec
 *  - should display newpage correctly
 *  - should display toast error when category greater than 20 characters
 *  - should display detailpage when create new thread successfully
 */
describe('New Thread spec', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login?redirect=/new');
        cy.get('#email').type('zuck@mail.com');
        cy.get('#password').type('zuck123');
        cy.get('button').contains('MASUK').click();
    });

    it('should display new page correctly', () => {
        cy.get('#title').should('be.visible');
        cy.get('#category').should('be.visible');
        cy.get('#body').should('be.visible');
        cy.get('button').contains('BUAT DISKUSI').should('be.visible');
    });

    it('should display toast error when category greater than 20 characters', () => {
        cy.get('#title').type('ini judul');
        cy.get('#category').type('ini adalah kategori tapi sayangnya kategori ini panjang banget sampe 20 lebih');
        cy.get('#body').type('ini body');
        cy.get('button').contains('BUAT DISKUSI').click();
        cy.get('.Toastify__toast-body').should('contain', 'Kategori thread tidak boleh lebih dari 20 karakter');
    });

    it('should display detailpage when create new thread successfully', () => {
        const title = 'Apa itu React';
        const body = 'React adalah library javascript ya gess bukann framework react';
        cy.get('#title').type(title);
        cy.get('#category').type('react');
        cy.get('#body').type(body);
        cy.get('button').contains('BUAT DISKUSI').click();
        cy.get('.Toastify__toast-body').should('contain', 'Berhasil membuat diskusi');
        cy.get('[data-cy="thread-title"]').contains(title).should('be.visible');
        cy.get('[data-cy="thread-body"]').contains(body).should('be.visible');
        cy.get('[data-test-id="form-comment-title"]').contains('Tulis Komentar').should('be.visible');
        cy.get('button').contains('Kirim Komentar').should('be.visible');
    });
});
