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
  it('Shows details for current look', () => {
    cy.visit('http://localhost:1234/')
    cy.get('#like-button').click()
    cy.get('#look-details-button').click({ force: true })
    cy.contains('Pretty Little Thing')
    cy.contains('Description')
    cy.contains('£199.99')
  })
})
