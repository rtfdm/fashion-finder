describe('User can see the like button', () => {
  beforeEach(function() {
    cy.reload()
  })
  it('Shows a like button', () => {
    cy.visit('http://localhost:1234/')
    cy.get('#like-button')
  })
})
