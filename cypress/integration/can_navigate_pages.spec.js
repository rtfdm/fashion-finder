describe('User can navigate app', () => {
  it('takes user to look details page', () => {
    cy.visit('http://localhost:1234/')
    cy.get('#look-details-button').click({ force: true })
    cy.url().should('eq', 'http://localhost:1234/lookinfo')
  })

  it('takes user back to looks page', () => {
    cy.visit('http://localhost:1234/lookinfo')
    cy.get('#back-button').click()
    cy.url().should('eq', 'http://localhost:1234/')
  })
})
