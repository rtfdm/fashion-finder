describe('User can see the dismiss button', () => {
  it('Shows a Dismiss button', () => {
    cy.visit('/')
    cy.get('#dismiss-button')
  })
})
