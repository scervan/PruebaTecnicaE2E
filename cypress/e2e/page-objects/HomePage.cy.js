class HomePage {
  visit() {
    cy.visit('https://www.Demoblaze.com');
  }
  selectProduct(productName) {
    cy.contains(productName).click();
  }

  addToCart() {
    cy.contains('Add to cart').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added');
    });
  }
}

export default HomePage;

