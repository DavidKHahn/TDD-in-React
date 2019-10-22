import React from 'react';
import { Col, Row } from 'react-materialize';
import { BrowserRouter as Router, Route } from "react-router-dom";
import RestaurantDetailPage from './RestaurantDetailPage';
import RestaurantListPage from './RestaurantListPage';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Row>
          <Col s={12} m={10} l={8} offset="m1 12">
            <Route path="/" exact component={RestaurantListPage} />
            <Route path="/restaurants/:name" component={RestaurantDetailPage} />
          </Col>
        </Row>
      </Router>
    );
  }
}
