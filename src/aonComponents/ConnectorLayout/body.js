import React from "react";
import Button from "../Button";

function Body({ connectionName, desc, buttonTitle, buttonHandler, id }) {
  return (
    <div className="row px-3 template-content-section">
      <div className="col-md-12 ">
        <div className="heading">{connectionName}</div>
        <div className="description">{desc}</div>
      </div>
      <div className="w-100 text-center my-3">
        <div className="w-100 text-center my-3">
          <Button
            type="button"
            className="btn btn-green btn-block"
            handler={() => buttonHandler(id)}
          >
            {buttonTitle}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Body);
