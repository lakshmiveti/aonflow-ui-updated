import React from "react";
import BodyInnerView from '../../../containers/BodyInnerView';
import Step1 from './Step1';


function New() {
  return <BodyInnerView params={{comp:<Step1/>, heading:'Add New Connector'}}/>
}

export default New
