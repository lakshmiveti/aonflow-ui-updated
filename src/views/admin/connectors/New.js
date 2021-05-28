import React from "react";
import BodyInnerView from "../../../containers/BodyInnerView";
import Step1 from "./Step1";
import Connector from "./connector/connector";

function New() {
  return (
    <BodyInnerView
      params={{ comp: <Connector />, heading: "Add New Connector" }}
    />
  );
}

export default New;
