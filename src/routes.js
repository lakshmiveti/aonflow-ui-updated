/**
 * Author: Lakshman Veti
 * Type: Router
 * Objective: To route user navigation
 * Associated Route/Usage: Global
 */

import React from "react";

/**Admin Routes */
const Dashboard = React.lazy(() => import("./views/admin/dashboard/Default"));
const ConnectorList = React.lazy(() => import("./views/admin/connectors/List"));
const NewConnector = React.lazy(() => import("./views/admin/connectors/New"));

const routes = [
  { path: "/", exact: true, name: "Home", component: Dashboard },
  { path: "/dashboard", exact: true, name: "Home", component: Dashboard },
  /**Connertor Routes */
  {
    path: "/connector/list",
    exact: true,
    name: "connector-list",
    component: ConnectorList,
  },
  {
    path: "/connector/new",
    exact: true,
    name: "connector-new",
    component: NewConnector,
  },
  {
    path: "/connector/edit",
    exact: true,
    name: "connector-edit",
    component: NewConnector,
  },
];

export default routes;
