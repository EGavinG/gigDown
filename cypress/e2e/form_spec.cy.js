describe('Form Component', () => {
  beforeEach(() => {
    cy.viewport('macbook-15')
    cy.intercept('GET', 'http://localhost:3001/api/v1/usblibrary', { fixture: 'usblibrary.json' }).as('usblibraryRequest')
    cy.intercept('GET', 'http://localhost:3001/api/v1/checklist', { fixture: 'checklist.json' }).as('checklistRequest')
    cy.intercept('POST', 'http://localhost:3001/api/v1/checklist', { fixture: 'checklist_item.json' }).as('newPostRequest')
    cy.visit('http://localhost:3000')
    cy.get('.toggle-bttn').click()
    cy.get('@checklistRequest')
    cy.url().should('include', '/checklist')
  })

  context('Happy Path - Form submission succeeds', () => {
    it('should submit the form with valid data', () => {
      cy.intercept('POST', 'http://localhost:3001/api/v1/checklist', { fixture: 'checklist_item.json' }).as('postRequest')
      
      cy.get('input[name="title"]').type('Test Title')
      cy.get('input[name="artist"]').type('Test Artist')
      cy.get('input[name="album"]').type('Test Album')
      cy.get('input[name="genre"]').type('Test Genre')
      cy.get('input[name="bpm"]').type('Test BPM')
      cy.get('input[name="key"]').type('Test Key')
      cy.get('input[name="duration"]').type('Test Duration')

      cy.get('button[aria-label="Submit-Button"]').click()

      cy.wait('@postRequest').then((interception) => {
        expect(interception.response.statusCode).to.equal(200)
      })
    })
  })

  context('Sad Path - Form submission fails', () => {
    it('should display error message when form submission fails', () => {
      cy.intercept('POST', 'http://localhost:3001/api/v1/checklist', { statusCode: 500 }).as('postRequest')
      
      cy.get('button[aria-label="Submit-Button"]').click()

      cy.wait('@postRequest').then((interception) => {
        expect(interception.response.statusCode).to.equal(500)
        cy.contains('Error: Failed to add track to checklist').should('be.visible')
      })
    })
  })
})


