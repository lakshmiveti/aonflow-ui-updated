/**
 * Author: Lakshman Veti
 * Type: Component
 * Objective: To render List of Connectors
 * Associated Route/Usage: /connector/list
 */

import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AonContext from "../../../context/aonContext";
import ShowList from "./ShowList";
import tokenService from "../../../services/tokenService";
import getConnectorListService from "../../../services/getConnectorListService";
import '../../../scss/_main.scss'

const List = () => {
  console.log("AonContext", useContext(AonContext));
  const { setJWTToken, setConnector, setConnection, resetStepData } =
    useContext(AonContext);

  useEffect(() => {
    async function getToken() {
      const result = await tokenService({
        email: "aon_dev_user@gmail.com",
        orgId: 1,
      });
      console.log("result", result);
      if (result && result.token) {
        setJWTToken(result.token);
        const connectorData = await getConnectorListService(result.token);
        console.log("connectorData", connectorData);
        if (connectorData.connector) {
          setConnector(connectorData.connector);
          setConnection(false);
          resetStepData();
        }
      }
    }
    getToken();
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <h3 className="selected-item">List of Connectors</h3>
        </div>
        <div className="col-md-6">
          <Link to="new" className="btn btn-green float-right no-right-margin">
            Create connector
          </Link>
        </div>
      </div>
      <ShowList />
    </div>
  );
};

export default List;
