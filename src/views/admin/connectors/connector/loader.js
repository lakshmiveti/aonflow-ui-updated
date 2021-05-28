import React from "react";

function Loader() {
  return (
    <div className="loader-head">
      <p className="selected-item">Checking the new connection</p>
      <img
        className="loader"
        src="img/loading-animation.svg"
        alt="back arrow"
      />
    </div>
  );
}

export default Loader;
