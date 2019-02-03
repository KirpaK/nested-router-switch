# Nested Router Switch
Router for nested React routing.
Adds a route prefix to the path.

# Introdaction

### Installation

Install Package for Project
```sh
$ npm install @kirpa/nested-router-switch --save
```
Install the package globally
```sh
$ npm install @kirpa/nested-router-switch -g
```

### Usage

```javascript
import React from "react";
import { Route, Redirect, Switch } from "react-router";
import NestedSwitch from "@kirpa/nested-router-switch";

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

```
  

License
----

MIT
