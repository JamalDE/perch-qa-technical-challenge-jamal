class HomePage {
    elements = {
        mainContent: () => cy.get('[data-testid="home-page"]'),
        productsGrid: () => cy.get('.products-grid'),
        sortButton: () => cy.get('[data-testid="sort-price"]'),
        productPrices: () => cy.get('.product-price'),
        profileButton: () => cy.get('[data-testid="nav-to-profile"]'),
        cartButton: () => cy.get('[data-testid="nav-to-cart"]')
    }

    visit() {
        cy.visit('/');
    }

    verifyMainContent() {
        this.elements.mainContent().should('be.visible');
    }

    verifyProfileButton(){
        this.elements.profileButton().should('be.visible');
    }

    verifyCartButton(){
        this.elements.cartButton().should('be.visible');
    }

    clickProfileButton(){
        this.elements.profileButton().click();
    }
    
    verifyProductsGrid() {
        this.elements.productsGrid().should('be.visible');
    }

    clickSortButton() {
        this.elements.sortButton().should('be.visible');
        this.elements.sortButton().click();
    }
    
    verifyProductSortAssending(){
         let prices = [];

    cy.get('.product-price')
    .each(($el) => {
      const priceText = $el.text().replace('$', '').trim();
      prices.push(parseFloat(priceText));
    })
    .then(() => {
      const sortedPrices = [...prices].sort((a, b) => a - b);
      expect(prices).to.deep.equal(sortedPrices);
    });
    }

    verifyProductSortDescending() {
    let prices = [];

    cy.get('.product-price')
        .each(($el) => {
            const priceText = $el.text().replace('$', '').trim();
            prices.push(parseFloat(priceText));
        })
        .then(() => {
            const sortedPrices = [...prices].sort((a, b) => b - a); // Descending sort
            expect(prices).to.deep.equal(sortedPrices);
        });
}

}

export default new HomePage();