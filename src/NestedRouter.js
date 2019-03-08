import React from "react";
import PropTypes from "prop-types";
import NestedSwitch from "./NestedRouterSwitch";

export const NestedRouter = ({ match: { path }, children }) => <NestedSwitch route={path}>{children}</NestedSwitch>;

NestedRouter.propTypes = {
  match: PropTypes.objectOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired
    })
  ).isRequired
};

export default NestedRouter;
