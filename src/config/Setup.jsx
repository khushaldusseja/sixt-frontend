import React from "react";
import getRoutes from "../router/CustomRoute";

const routes = getRoutes();

const Setup = () => {
  return <>{routes}</>;
};

export default Setup;
