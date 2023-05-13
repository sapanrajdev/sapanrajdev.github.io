import React from "react";
import noImage from "../assets/icons/no_image.png";

/**
 * @returns a no-content image for undefined image
 */
export const NoImage = () => {
  return <img src={noImage} alt="no-image" />;
};
