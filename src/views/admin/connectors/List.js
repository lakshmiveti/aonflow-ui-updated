/**
 * Author: Lakshman Veti
 * Type: Component
 * Objective: To render List of Connectors
 * Associated Route/Usage: /connector/list
*/


import React from 'react';
import {Link} from 'react-router-dom'

const List = () => {
  return (
    <div>
    <div className="row">
       <div className="col-md-6">
          <h3 className="selected-item">List of Connectors</h3>
       </div>
       <div className="col-md-6"><Link to="new" className="btn btn-green float-right no-right-margin">Create connector</Link></div>
    </div>
    <div className="row">
       <div className="col-md-3 p-3">
          <div className="template-card shadow">
             <div className="row">
                <div className="col-3">&nbsp;</div>
                <div className="col-md-6 text-center my-2"><img className="img-fluid logo-section" src="http://13.235.55.86/api/v1/file/fetch/50" alt="" /></div>
                <div className="col-3 delete-btn-card"><img className="img-fluid delete-img" src="img/delete-btn.svg" alt="delete" /></div>
             </div>
             <div className="row px-3 template-content-section">
                <div className="col-md-12  my-2">
                   <div className="heading">Saleforece Test</div>
                   <div className="description">Test saleforce connection</div>
                </div>
                <div className="w-100 text-center my-3"><button type="button" className="btn btn-green">Edit Connector</button></div>
             </div>
          </div>
       </div>
    </div>
 </div>
  )
}

export default List
