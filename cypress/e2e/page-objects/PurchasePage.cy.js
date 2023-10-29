class PurchasePage {
    fillForm(name, country, city, creditCard, month, year) {
      cy.get('#name').type(name);
      cy.get('#country').type(country);
      cy.get('#city').type(city);
      cy.get('#card').type(creditCard);
      cy.get('#month').type(month);
      cy.get('#year').type(year);
    }
  
    completePurchase() {
      cy.contains('Purchase').click();
    }
  
    elementExists(selector) {
      return cy.get('body').then(body => {
        return body.find(selector).length > 0;
      });
    }
    
    validatePurchase() {
      cy.contains('Thank you for your purchase!').then((element) => {
        if (element.is(':visible')) {
          cy.screenshot();
        } else {
          throw new Error('Thank you message not visible.');
        }
      });
    }
  }
  
  export default PurchasePage;
  