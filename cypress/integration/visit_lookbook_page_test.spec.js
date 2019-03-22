describe('Navigation between look page and basket', () => {
  it('can direct the user from look page to basket', () => {
    cy.visit('http://localhost:1234/')
    cy.get('#lookbook').click()
    cy.url().should('eq', 'http://localhost:1234/lookbook')
  })

  it('can direct the user from look page to basket', () => {
    cy.visit('http://localhost:1234/')
    cy.get('#lookbook').click()
    cy.get('#lookpage').click()
    cy.url().should('eq', 'http://localhost:1234/')
  })


})
