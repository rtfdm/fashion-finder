describe('Navigation between look page and basket', () => {
  it('can direct the user from look page to basket', () => {
    cy.visit('http://localhost:1234/')
    console.log(cy.url())
    cy.get('#lookbook').click()
    console.log(cy.url())
    cy.url().should('eq', 'http://localhost:1234/lookbook')
  })
})
