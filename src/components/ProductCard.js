import React from "react";
import { ProductCardStyle } from "./style/productCard.styled";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/cart");
  };

  return (
    <ProductCardStyle>
      <img src={props.img} />
      <h2>{props.title}</h2>
      <span>${props.price}</span>
      {props.addedToCart ? (
        <button onClick={handleNavigate}>Go To Cart</button>
      ) : (
        <button onClick={props.handleClick}>Add to Cart</button>
      )}
    </ProductCardStyle>
  );
};

export default ProductCard;
