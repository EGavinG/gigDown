describe('Checklist Component', () => {
  context('Happy Path - DELETE request successful', () => {
    beforeEach(() => {
      cy.viewport('macbook-15');
      cy.intercept('GET', 'http://localhost:3001/api/v1/usblibrary', { fixture: 'usblibrary.json' }).as('usblibraryRequest');
      cy.intercept('GET', 'http://localhost:3001/api/v1/checklist', { fixture: 'checklist.json' }).as('checklistRequest');
      cy.visit('http://localhost:3000');
      cy.get('.toggle-bttn').click();
      cy.wait('@checklistRequest');
      cy.url().should('include', '/checklist');
    });

    it('should delete a track from the checklist', () => {
      cy.intercept('DELETE', 'http://localhost:3001/api/v1/checklist/*', { fixture: 'delete_request.json', statusCode: 204 }).as('deleteRequest');
      cy.get('.delete').first().click();
      cy.wait('@deleteRequest').then((interception) => {
        expect(interception.response.statusCode).to.equal(204);
        cy.get('.text').contains('Title: Sexual (li da di)').should('not.exist');
      });
    });
  });
});
