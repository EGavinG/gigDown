describe('Checklist Component', () => {
  context('Happy Path - GET request successful', () => {
    beforeEach(() => {
      cy.viewport('macbook-15');
      cy.intercept('GET', 'http://localhost:3001/api/v1/usblibrary', { fixture: 'usblibrary.json' }).as('usblibraryRequest');
      cy.intercept('GET', 'http://localhost:3001/api/v1/checklist', { fixture: 'checklist.json' }).as('checklistRequest');
      cy.visit('http://localhost:3000');
      cy.get('.toggle-bttn').click();
      cy.wait('@checklistRequest');
      cy.url().should('include', '/checklist');
    });

    it('displays the checklist when GET request is successful', () => {
      cy.get('.text').should('have.length', 21); 
    });
  });

  context('Sad Path - GET request fails', () => {
    beforeEach(() => {
      cy.viewport('macbook-15');
      cy.intercept('GET', 'http://localhost:3001/api/v1/usblibrary', { fixture: 'usblibrary.json' }).as('usblibraryRequest');
      cy.intercept('GET', 'http://localhost:3001/api/v1/checklist', { statusCode: 500, body: {} }).as('checklistRequest');
      cy.visit('http://localhost:3000');
      cy.get('.toggle-bttn').click();
      cy.wait('@checklistRequest');
      cy.url().should('include', '/checklist');
    });

    it('displays error message when GET request fails', () => {
      cy.contains('No Tracks To Currently Download!').should('be.visible');
    });
  });
});
