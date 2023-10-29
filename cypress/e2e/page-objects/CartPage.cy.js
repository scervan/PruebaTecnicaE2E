class CartPage {
  visit() {
    cy.visit('https://www.demoblaze.com/cart.html');
  }
  verifyProductInCart(productName) {
    cy.contains(productName).should('be.visible');
  }
}

export default CartPage;
