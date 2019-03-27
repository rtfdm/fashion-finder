describe('User can see Look Details', () => {
  it('Shows a Look Image', () => {
    cy.visit('http://localhost:1234/lookinfo/1')
    cy.get('#look-image')
  })

  it('Shows a brand and description', () => {
    cy.visit('http://localhost:1234/lookinfo/1')
    cy.contains('Brands')
    cy.contains('Ralph Lauren')
    cy.contains('Description')
    cy.contains('The description of look 1.')
    // cy.contains('£299.99')
  })

  it('Shows a back button', () => {
    cy.visit('http://localhost:1234/lookinfo/1')
    cy.get('#back-button')
  })

  it('Shows details for current look', () => {
    cy.visit('http://localhost:1234/')
    cy.wait(1000)
    cy.get('#like-button').click()
    cy.get('#look-details-button').click({ force: true })
    cy.contains('Brands')
    cy.contains('Lacoste')
    // cy.contains('£299.99')
  })
})
