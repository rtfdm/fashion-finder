describe('User can see Look Details', () => {
  it('Shows a Look Image', () => {
    cy.visit('http://localhost:1234/lookinfo')
    cy.get('#look-image')
  })
})
