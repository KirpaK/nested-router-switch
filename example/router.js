import React from "react";
import { Route, Redirect, Switch } from "react-router";
import NestedSwitch from "../src/";
import { NestedRouter } from "../src/";

const ProductRouter = props => (
  <NestedRouter {...props}>
    <Route path="/create" component={() => "create"} />
    <Route path="/details/:id" component={({ match }) => `details id:${match.params.id}`} />
    <Redirect from="*" to="/create" />
  </NestedRouter>
);

const CustomProductRouter = ({ match: { path } }) => (
  <NestedSwitch route={`product/${path}`}>
    <Route path="/create" component={() => "custom create"} />
    <Route path="/details/:id" component={({ match }) => `custom details id:${match.params.id}`} />
    <Redirect from="*" to="/create" />
  </NestedSwitch>
);

export default () => (
  <Switch>
    <Route path="/products" component={() => "products"} />
    <Route path="/product" component={ProductRouter} />
    <Route path="/custom" component={CustomProductRouter} />
  </Switch>
);
