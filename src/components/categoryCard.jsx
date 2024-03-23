import React from "react";
import { ALLOWED_CATEGORIES } from "../utils";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ imgSrc, title }) => {
  const navigate = useNavigate();
  return (
    <div className="category-card">
      <div className="cat-card-img-cont">
        <img src={imgSrc} alt="category-img" style={{ width: "100%" }} />
      </div>
      <button
        onClick={() =>
          navigate(
            `/products/${
              title === "Women's"
                ? ALLOWED_CATEGORIES.WOMENS
                : ALLOWED_CATEGORIES.MENS
            }`
          )
        }
        className="bigText"
      >
        {title}
      </button>
    </div>
  );
};

export default CategoryCard;
