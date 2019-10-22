describe('adding a restaurant', () => {
  it('displays the restaurant in the list', () => {
    const restaurantName = 'Sushi Place';
    // visit the page
    cy.visit('http://localhost:1234');
    // modal not shown at start
    cy.get('[data-test="newRestaurantName"]').should('not.be.visible');

    cy.get('[data-test="addRestaurantButton"]').click();
    // click save
    cy.get('[data-test="addRestaurantModal"] button.modal-close').click();

    cy.get('[data-test="newRestaurantName"]').should("not.be.visible");

    // modal displays validation errors
    cy.get('[data-test="addRestaurantButton"]').click();

    cy.get('[data-test="saveNewRestaurantButton"]').click();

    cy.get('[data-test="newRestaurantNameError"]')
      .contains('Cannot be blank');

    // modal allows adding restaurant
    cy.get('[data-test="newRestaurantName"]').type(restaurantName);

    cy.get('[data-test="saveNewRestaurantButton"]').click();

    cy.get('[data-test="newRestaurantName"]').should("not.be.visible");
    // restaurant name is saved onto page
    cy.contains(restaurantName);
  });
});
