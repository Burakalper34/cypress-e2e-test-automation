describe('Login Tests', () => {
beforeEach(() => {
  cy.fixture('users').as('users')
}) 

  it('should login successfully with valid credentials', function () {
    cy.login(this.users.validUser.username, this.users.validUser.password)
    cy.url().should('include', '/inventory')
    cy.get('.title').should('contain', 'Products')
  })

  it('should show an error message with invalid credentials', function () {
    cy.login(this.users.invalidUser.username, this.users.invalidUser.password)
    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
  })
})