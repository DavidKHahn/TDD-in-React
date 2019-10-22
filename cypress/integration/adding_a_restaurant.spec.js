describe('adding a restaurant', () => {
  it('displays the restaurant in the list', () => {
    const restaurantName = 'Sushi Place';

    // visit the page
    cy.visit('http://localhost:1234');
    // modal not shown at start
    modalNotShownAtTheStart();
    // modal can be cancelled
    modalCanBeCancelled();
    // modal displays validation errors
    modalDisplaysValidationErrors();
    // modal clears out validation errors when closed
    modalClearsOutValidationErrorWhenClosed();
    // modal allows adding restaurant
    modalAllowsAddingRestaurant(restaurantName);
  });

  function modalNotShownAtTheStart() {
    cy.get('[data-testid="newRestaurantName"]').should('not.be.visible');
  }

  function modalCanBeCancelled() {
    cy.get('[data-testid="addRestaurantButton"]').click();

    cy.get('[data-testid="addRestaurantModal"] button.modal-close').click();

    cy.get('[data-testid="newRestaurantName"]').should("not.be.visible");
  }

  function modalDisplaysValidationErrors() {
    cy.get('[data-testid="addRestaurantButton"]').click();

    cy.get('[data-testid="saveNewRestaurantButton"]').click();

    cy.get('label[for="restaurantName"][data-error="Cannot be blank"]')
      .should("be.visible");
  }

  function modalAllowsAddingRestaurant(restaurantName) {
    cy.get('[data-testid="newRestaurantName"]').type(restaurantName);

    cy.get('[data-testid="saveNewRestaurantButton"]').click();

    cy.get('[data-testid="newRestaurantName"]').should("not.be.visible");

    cy.contains(restaurantName);
  }

  function modalClearsOutValidationErrorWhenClosed() {
    cy.get('[data-testid="addRestaurantButton"]').click();

    cy.get('[data-testid="saveNewRestaurantButton"]').click();

    cy.get('[data-testid="addRestaurantModal"] button.modal-close').click();

    cy.get('label[for="restaurantName"][data-error="Cannot be blank"]')
    .should("not be.visible");

    cy.get('[data-testid="addRestaurantModal"] button.modal-close').click();
  }
});
