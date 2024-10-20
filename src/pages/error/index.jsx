import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="crancy-error">
      {/* <img className="error-img" src={errorImg} alt="page not found" /> */}
      <div className="crancy-error__content">
        <h2 className="crancy-error__title">Oops! Page not found.</h2>
        <Link to="/" className="crancy-btn crancy-btn--error">
          Go Back
        </Link>
      </div>
    </section>
  );
}

export default Error;
