import React from 'react';
import { Col, Row } from 'react-materialize';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import RestaurantDetailPage from './RestaurantDetailPage';
import RestaurantListPage from './RestaurantListPage';
import store from './store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <Row>
          <Col s={12} m={10} l={8} offset="m1 12">
            <Route path="/" exact component={RestaurantListPage} />
            <Route path="/restaurants/:name" component={RestaurantDetailPage} />
          </Col>
        </Row>
      </Router>
      </Provider>
    );
  }
}
