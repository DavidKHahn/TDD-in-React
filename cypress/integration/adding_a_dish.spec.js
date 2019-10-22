describe('adding a dish', () => {
    it('displays the dish in the list', () => {
        const dishName = 'Tuna Sushi';

        cy.visit("http://localhost:1234");

        addRestaurant(dishName);
        goToRestaurantPage(dishName);
        modalNotShownAtTheStart();
        modalAllowsAddingDish(dishName);
    });


  function addRestaurant(dishName) {
    cy.get('[data-testid="addRestaurantButton"]').click();
    cy.get('[data-testid="newdishName"]').type(dishName);
    cy.get('[data-testid="saveNewRestaurantButton"]').click();
  }

  function goToRestaurantPage(dishName) {
    cy.contains(dishName).click();
  }

  function modalNotShownAtTheStart() {
    cy.get('[data-testid="newDishName"]').should('not.be.visible');
  }

  function modalAllowsAddingDish(dishName) {
    cy.get('[data-testid="addDishButton"]').click();
    cy.get('[data-testid="newDishName"]').type(dishName);
    cy.get('[data-testid="saveNewDishtButton"]').click();
    cy.get('[data-testid="newDishName"]').should("not.be.visible");
    cy.contains(dishName);
  }
})