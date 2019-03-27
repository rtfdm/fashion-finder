describe('Navigation between look page and basket', () => {
  beforeEach(function() {
    cy.reload()
  })

  it('can direct the user from look page to basket', () => {
    cy.visit('http://localhost:1234/')
    cy.get('#lookbook').click()
    cy.url().should('eq', 'http://localhost:1234/lookbook')
  })

  it('can direct the user from look page to basket', () => {
    cy.visit('http://localhost:1234/')
    cy.get('#lookbook').click()
    cy.get('#back-button').click()
    cy.url().should('eq', 'http://localhost:1234/')
  })
})
