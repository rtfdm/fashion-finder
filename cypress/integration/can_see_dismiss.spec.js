describe('User can see the dismiss button', () => {
  it('Shows a Dismiss button', () => {
    cy.visit('http://localhost:1234')
    cy.get('#dismiss-button')
  })
})
