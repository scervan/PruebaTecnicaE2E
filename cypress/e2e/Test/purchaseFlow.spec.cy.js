import CartPage from "../page-objects/CartPage.cy";
import HomePage from "../page-objects/HomePage.cy";
import PurchasePage from "../page-objects/PurchasePage.cy";

describe('DemoBlaze Purchase Flow', () => {
  it('should complete a purchase', () => {
    const home = new HomePage();
    const cart = new CartPage();
    const purchase = new PurchasePage();

    // Step 1: Add two products to cart
    home.visit();
    cy.intercept('POST', 'https://api.demoblaze.com/addtocart').as('addProduct1');
    home.selectProduct('Samsung galaxy s6');
    home.addToCart();
    cy.wait('@addProduct1');
    home.visit();
    home.selectProduct('Nokia lumia 1520');
    home.addToCart();

    // Step 2: View the shopping cart
    cart.visit();
    cart.verifyProductInCart('Samsung galaxy s6');
    cart.verifyProductInCart('Nokia lumia 1520');
    cy.contains('Place Order').should('be.visible').click();


    // Step 3: Complete the purchase form
    purchase.fillForm('Said Cervantes', 'Colombia', 'Bogotá', '123456789', '28', '2023');

    // Step 4: Complete the purchase
    purchase.completePurchase();
    purchase.validatePurchase();
  });
});
