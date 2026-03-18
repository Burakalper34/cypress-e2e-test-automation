describe('Cart Tests', () => {
  beforeEach(() => {
    cy.fixture('users').as('users')
  })

  it('should add a product to the cart', function () {
    cy.login(this.users.validUser.username, this.users.validUser.password)
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('contain', '1')
  })

  it('should remove a product from the cart', function () {
    cy.login(this.users.validUser.username, this.users.validUser.password)
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('not.exist')
  })
})