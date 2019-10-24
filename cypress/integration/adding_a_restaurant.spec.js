describe('adding a restaurant', () => {
  it('displays the restaurant in the list', () => {
    const initialRestaurantName = "Spaghetti Place";
    const restaurantName = 'Sushi Place';

    setUpInitialRestaurant(initialRestaurantName, restaurantName)
    // visit the page
    cy.visit('http://localhost:1234');

    restaurantsFromServerDisplayedAtStart(initialRestaurantName);
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

  function setUpInitialRestaurant(initalRestaurantName, addedRestaurantName) {
       // start fake server
       cy.server();
       // make route available
       cy.route({
         method: 'GET',
         url: '/restaurants',
         response:  {
           data: [
             {
               type: 'restaurants',
               id: '1',
               attributes: {
                 name: initalRestaurantName
               }
             }
           ]
         }
       })

       cy.route({
         method: 'POST',
         url: 'restaurants',
         response:  {
          data: {
            type: 'restaurants',
            id: '2',
            attributes: {
                name: addedRestaurantName,
            },
          },
      },
    })
  }

  function restaurantsFromServerDisplayedAtStart(restaurantName) {
    cy.contains(restaurantName)
  }

  function modalNotShownAtTheStart() {
    cy.get('[data-testid="newRestaurantName"]').should('not.be.visible');
  }

  function modalCanBeCancelled() {
    cy.get('[data-testid="addRestaurantButton"]').click();

    cy.get('[data-testid="cancelAddRestaurantButton"]').click();

    cy.get('[data-testid="newRestaurantName"]').should("not.be.visible");
  }

  function modalDisplaysValidationErrors() {
    cy.get('[data-testid="addRestaurantButton"]').click();

    cy.get('[data-testid="saveNewRestaurantButton"]').click();

    cy.get('label[for="restaurantName"][data-error="Cannot be blank"]')
      .should("be.visible");

    cy.get('[data-testid="cancelAddRestaurantButton"]').click();
  }

  function modalAllowsAddingRestaurant(restaurantName) {
    cy.get('[data-testid="addRestaurantButton"]').click();

    cy.get('[data-testid="newRestaurantName"]').type(restaurantName);

    cy.get('[data-testid="saveNewRestaurantButton"]').click();

    cy.get('[data-testid="newRestaurantName"]').should("not.be.visible");

    cy.contains(restaurantName);
  }

  function modalClearsOutValidationErrorWhenClosed() {
    cy.get('[data-testid="addRestaurantButton"]').click();

    cy.get('[data-testid="saveNewRestaurantButton"]').click();

    cy.get('[data-testid="cancelAddRestaurantButton"]').click();

    cy.get('[data-testid="addRestaurantButton"]').click();

    cy.get('label[for="restaurantName"][data-error="Cannot be blank"]')
      .should("not.be.visible");

    cy.get('[data-testid="cancelAddRestaurantButton"]').click();
    }
});
