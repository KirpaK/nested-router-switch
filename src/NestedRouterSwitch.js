import React from "react";
import { Switch } from "react-router";
import PropTypes from "prop-types";

export const NestedRouterSwitch = ({ children, route }) => {
  return (
    <Switch>
      {React.Children.map(children, (child, i) => {
        const { path, from, to } = child.props;
        const composite = {
          ...child,
          props: {
            ...child.props,
            path: path && route + path,
            from: from && route + from,
            to: to && route + to
          },
          key: `child-route-${i}`
        };
        return composite;
      })}
    </Switch>
  );
};

NestedRouterSwitch.propTypes = {
  route: PropTypes.string
};

export default NestedRouterSwitch;
