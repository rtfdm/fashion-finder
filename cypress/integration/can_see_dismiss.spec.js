describe('User can see the dismiss button', () => {
  beforeEach(function() {
    cy.reload()
  })
  it('Shows a Dismiss button', () => {
    cy.visit('http://localhost:1234/')
    cy.get('#dismiss-button')
  })
})
