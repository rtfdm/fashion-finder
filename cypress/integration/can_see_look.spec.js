describe('User can see a look', () => {
  beforeEach(function() {
    cy.reload()
  })
  it('Shows a picture', () => {
    cy.visit('http://localhost:1234/')
    cy.get('#1')
  })
})
