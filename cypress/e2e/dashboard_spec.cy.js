describe('gigDown UI', () => {
  context('Happy Path - GET request successful', () => {
    beforeEach(() => {
      cy.viewport('macbook-15');
      cy.visit('http://localhost:3000');
      cy.intercept('GET', 'http://localhost:3001/api/v1/usblibrary', { fixture: 'usblibrary.json' }).as('tracklist');
    });

    it('displays the correct title', () => {
      cy.get('h1').should('have.text', 'gigDown');
    });

    it('displays tracks in the USB Library', () => {
      cy.get('.Track').should('have.length.above', 0);
    });

    it('searches for a track', () => {
      cy.get('.searchbar input').type('Rewind');
      cy.wait('@tracklist');
      cy.get('.Track').should('have.length', 1);
    });

    it('displays track details correctly', () => {
      cy.get('.Track').first().within(() => {
        cy.get('p').eq(0).should('have.text', 'Rewind');
        cy.get('p').eq(1).should('have.text', 'Kelela');
      });
    });
  });

  context('Sad Path - GET request fails', () => {
    beforeEach(() => {
      cy.viewport('macbook-15');
      cy.visit('http://localhost:3000');
      cy.intercept('GET', 'http://localhost:3001/api/v1/usblibrary', { statusCode: 500, body: {} }).as('tracklist');
    });

    it('displays an error message when GET request fails', () => {
      cy.contains('Error: Failed to fetch USB library data').should('be.visible');
    });
  });
});
