class ProductPage {
    elements = {

        productName: () => cy.get('[data-testid="product-name"]'),
        productPrice: () => cy.get('[data-testid="product-price"]'),
        productDecription: () => cy.get('[data-testid="product-description"]'),
        quantityDropdown: () => cy.get('#quantity'),
        addToCartButton: () => cy.get('[data-testid="add-to-cart"]')

    }
    
    clickOnProduct(productId){
    cy.get(`[data-testid='view-product-${productId}']`).click();
}

    verifyProductName() {
        this.elements.productName().should('be.visible');
    }

    verifyProductPrice() {
        this.elements.productPrice().should('be.visible');
    }

    verifyProductDescription() {
        this.elements.productDecription().should('be.visible');
    }

    verifyQuantityDropdown(){
        this.elements.quantityDropdown().should('be.visible');
    }

    selectQuantity(quantity){
        this.elements.quantityDropdown().select(quantity);
    }

    clickAddToCartButton(){
        this.elements.addToCartButton().click();
    }

}

export default new ProductPage();