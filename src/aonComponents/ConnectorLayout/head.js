import React from "react";

function Head({ logoUrl, handler, id }) {
  console.log("id=", id);
  return (
    <div className="row">
      <div className="col-3">&nbsp;</div>
      <div className="col-md-6 text-center my-2">
        <img className="img-fluid logo-section" src={logoUrl} alt="brand" />
      </div>
      <div className="col-3 delete-btn-card">
        <img
          className="img-fluid "
          src="img/delete-btn.svg"
          onClick={() => handler(id)}
          alt="delete"
        />
      </div>
    </div>
  );
}

export default React.memo(Head);
