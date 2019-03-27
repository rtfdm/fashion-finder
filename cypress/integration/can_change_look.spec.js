describe('User can change Look', () => {
  beforeEach(function() {
    cy.reload()
  })

  it('Shows the next look on Like click', () => {
    cy.visit('http://localhost:1234/')
    cy.wait(1000)
    cy.get('#2')
    cy.get('#like-button').click({ force: true })
    cy.get('#1')
  })

  it('Shows the next look on Dismiss Click', () => {
    cy.visit('http://localhost:1234/')
    cy.wait(1000)
    cy.get('#2')
    cy.get('#dismiss-button').click({ force: true })
    cy.get('#1')
  })
})
