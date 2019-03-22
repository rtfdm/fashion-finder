describe('User can change Look', () => {
  it('Shows the next look on Like click', () => {
    cy.visit('http://localhost:1234/')
    cy.get('[data-look-id="1"]')
    cy.get('#like-button').click({ force: true })
    cy.get('[data-look-id="2"]')
  })

  it('Shows the next look on Dismiss Click', () => {
    cy.visit('http://localhost:1234/')
    cy.get('[data-look-id="1"]')
    cy.get('#dismiss-button').click({ force: true })
    cy.get('[data-look-id="2"]')
  })
})
