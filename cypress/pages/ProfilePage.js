class ProfilePage {
    elements = {

        profileName: () => cy.get('[data-testid="profile-name"]'),
        profileEmail: () => cy.get('[data-testid="profile-email"]'),
        editProfileButton: () => cy.get('[data-testid="edit-profile"]'),
        orderHistory: () => cy.get('[data-testid="orders-list"]'),
        backToHomeButton: () => cy.get('[data-testid="back-to-home"]'),
        viewOrders: () => cy.get('[data-testid="view-orders"]'),
        orderId: () => cy.get('[data-testid="order-number"]')
    }
    
    verifyPersonalDetails(){

        this.elements.profileName().should('be.visible');
        this.elements.profileEmail().should('be.visible');
        this.elements.editProfileButton().should('be.visible');

    }
    
    clickViewOrders(){
        this.elements.viewOrders().click();
    }

    verifyOrderHistory(){
        this.elements.orderHistory().should('be.visible');
    }

    verifyOrderId(id){

        let savedOrderId = '';

        this.elements.orderId()
        .invoke('text')
        .then((text) => {
        savedOrderId = text.trim(); 
  });
      expect(id.trim()).to.equal(savedOrderId);


    }




    verifyBackButtonPresent(){

        this.elements.backToHomeButton.should('be.visible');

    }
}

export default new ProfilePage();