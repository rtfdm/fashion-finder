describe('User can change Look', () => {
  it('Shows the next look on Like click', () => {
    cy.visit('http://localhost:1234/')
    cy.get('#PvWRXUNCDgo5K423bQgl')
    cy.get('#like-button').click({ force: true })
    cy.get('#jtg7RsC1RHbW8lefJ4Yh')
  })

  it('Shows the next look on Dismiss Click', () => {
    cy.visit('http://localhost:1234/')
    cy.get('#PvWRXUNCDgo5K423bQgl')
    cy.get('#dismiss-button').click({ force: true })
    cy.get('#jtg7RsC1RHbW8lefJ4Yh')
  })
})
