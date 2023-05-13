import React from "react";
import loader from "../assets/icons/loading.png";

/**
 * @returns a Loader component with circular loading icon
 */
export const Loader = () => {
  return (
    <div>
      <img
        width="100%"
        height="100%"
        src={loader}
        alt="load"
        className="loading"
      />
    </div>
  );
};
