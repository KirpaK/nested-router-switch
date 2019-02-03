import React from "react";
import { Route, Redirect, Switch } from "react-router";
import NestedSwitch from "../src/";

const ProductRouter = ({ match: { path } }) => (
  <NestedSwitch route={path}>
    <Route path="/create" component={() => "create"} />
    <Route path="/details/:id" component={({ match }) => `details id:${match.params.id}`} />
    <Redirect from="*" to="/create" />
  </NestedSwitch>
);

export default () => (
  <Switch>
    <Route path="/products" component={() => "products"} />
    <Route path="/product" component={ProductRouter} />
  </Switch>
);
