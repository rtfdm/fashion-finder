describe('User can see a look', () => {
  it('Shows a picture', () => {
    cy.visit('/')
    cy.get('#displayed-look')
  })
})
