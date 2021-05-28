/**
 * Author: Lakshman Veti
 * Type: Component
 * Objective: To render body inner container
 * Associated Route/Usage: /connector/new
 */

import React from "react";
import { useHistory } from "react-router-dom";

const BodyInnerView = ({ params }) => {
  let history = useHistory();
  return (
    <>
      {params.comp}
      {/* <div className="back-page">
      <img className="back-arrow" src="img/back-arrow.svg" alt="back arrow" onClick={history.goBack}/>
      <p className="selected-item">{params.heading}</p>
    </div>
    <div className="background-card-view">
      <div className="strip">
        <div className="row">
          <div className="col-md-6">
            <p className="strip-heading">Basic details of Connector</p>
          </div>
          <div className="col-md-6"><button type="button" className="btn btn-green float-right" disabled>Next</button></div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
              { params.comp }
        </div>
      </div>
    </div> */}
    </>
  );
};

export default React.memo(BodyInnerView);
