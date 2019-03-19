describe('User can see a look', () => {
  it('Shows a picture', () => {
    cy.visit('http://localhost:1234/')
    cy.get('#displayed-look')
  })
})
