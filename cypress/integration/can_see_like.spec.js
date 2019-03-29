describe('User can see the like button', () => {
  it('Shows a like button', () => {
    cy.visit('http://localhost:1234/')
    cy.get('#like-button')
  })
})
