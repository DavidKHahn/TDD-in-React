import React from 'react';
import { Collection, CollectionItem } from 'react-materialize';
import { Link } from 'react-router-dom';

const RestaurantList = ({ restaurants }) => (
  <Collection header = "Restaurants">
    <RestaurantItems restaurants={restaurants} />
  </Collection>
);

const RestaurantItems = ({ restaurants }) => (
  restaurants.length === 0
    ? <NoRestaurantItems />
    :
    <SomeRestaurantItems restaurants={restaurants} />
);

const NoRestaurantItems = () => (
  <CollectionItem style={{ color: 'gray' }}>
        None Added
  </CollectionItem>
);

const SomeRestaurantItems = ({ restaurants }) => (
  restaurants.map(restaurant => (
    <CollectionItem key={restaurant.id}>
      <Link to={`/restaurants/${restaurant.attributes.name}`}>
        {restaurant.attributes.name}
      </Link>
    </CollectionItem>
  ))
);

export default RestaurantList;
