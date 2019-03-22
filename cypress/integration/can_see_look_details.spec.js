describe('User can see Look Details', () => {
  it('Shows a Look Image', () => {
    cy.visit('http://localhost:1234/lookinfo')
    cy.get('#look-image')
  })
  it('Shows a brand description', () => {
    cy.visit('http://localhost:1234/lookinfo')
    cy.contains('Brands')
    cy.contains('Ralph Lauren')
    cy.contains('Description')
    cy.contains('£299.99')
  })
  it('Shows a back button', () => {
    cy.visit('http://localhost:1234/lookinfo')
    cy.get('#back-button')
  })
})
