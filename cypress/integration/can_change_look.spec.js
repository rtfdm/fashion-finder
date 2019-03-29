describe('User can change Look', () => {
  // beforeEach(function() {
  //   cy.reload(true)
  // })

  it('Shows the next look on Like click', () => {
    cy.visit('http://localhost:1234/')
    // cy.wait(2000)
    cy.get('#1')
    cy.get('#like-button').click({ force: true })
    cy.get('#2')
  })

  it('Shows the next look on Dismiss Click', () => {
    cy.visit('http://localhost:1234/')
    // cy.wait(2000)
    cy.get('#1')
    cy.get('#dismiss-button').click({ force: true })
    cy.get('#2')
  })
})
