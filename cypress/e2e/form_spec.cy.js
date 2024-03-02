describe('Form Component', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/checklist', { fixture: 'checklist.json' }).as('checklistRequest')
    cy.intercept('POST', 'http://localhost:3001/api/v1/checklist', { fixture: 'checklist_item.json' }).as('newPostRequest')
    cy.visit('http://localhost:3000')
    cy.get('@checklistRequest')
    cy.get('.toggle-bttn').click()
    cy.url().should('include', '/checklist')
  })


})