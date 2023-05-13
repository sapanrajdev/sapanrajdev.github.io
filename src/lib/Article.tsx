import React, { useEffect, useState } from "react";
import noImage from "../assets/icons/no_image.png";
import { IAritcleProps } from "../interfaces/ListingPage";

/**
 *
 * @param article prop contains name and imageName to display on the page
 * @returns a card with image and article name
 */
export const Article = ({ name, imageName }: IAritcleProps) => {
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    const loadImage = async () => {
      try {
        const image = await import(`../assets/icons/${imageName}`);
        setImageUrl(image.default);
      } catch (error) {
        setImageUrl(noImage);
      }
    };
    loadImage();
  }, [imageName]);

  return (
    <div className="content">
      <img className="content-image" src={imageUrl} alt={name} />
      <label className="content-label">{name}</label>
    </div>
  );
};
