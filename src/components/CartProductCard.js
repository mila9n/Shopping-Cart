import React from "react";
import { Trash } from "phosphor-react";
import { CartProductStyle } from "./style/CartProductCard.styled";

const CartProductCard = (props) => {
  return (
    <CartProductStyle>
      <div>
        <img src={props.img} />
        <div className="quantity__button">
          {props.quantity > 1 ? (
            <span onClick={props.handleDecrease}>-</span>
          ) : (
            <span onClick={props.handleRemove} s>
              <Trash size={16} />
            </span>
          )}
          <span className="quantity">{props.quantity}</span>

          <span onClick={props.handleIncrease}>+</span>
        </div>
      </div>
      <div>
        <h2>{props.title}</h2>
        <h3>${props.price}</h3>
        <button onClick={props.handleRemove}>Remove</button>
      </div>
    </CartProductStyle>
  );
};

export default CartProductCard;
