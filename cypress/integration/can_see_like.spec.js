describe('User can see the like button', () => {
  it('Shows a like button', () => {
    cy.visit('/')
    cy.get('#like-button')
  })
})
