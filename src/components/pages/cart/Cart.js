import React from "react";
import CartProductCard from "../../CartProductCard";
import { CartStyle } from "../../style/Cart.styled";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../../Redux/features/Cart";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItem);
  const item = useSelector((state) => state.cart.item);

  const [cartProduct, setCartProduct] = React.useState(cart);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setCartProduct(cart);
  }, [cart]);

  const handleRemove = (index) => {
    dispatch(
      removeFromCart({ index: index, quantity: cartProduct[index].quantity })
    );
  };

  const handleDecrease = (index) => {
    dispatch(decreaseQuantity({ index: index }));
  };
  const handleIncrease = (index) => {
    dispatch(increaseQuantity({ index: index }));
  };

  const total = () => {
    const totalArr = [];

    if (item >= 1) {
      for (let i of cart) {
        let totalPrice = i.price * i.quantity;
        totalArr.push(totalPrice);
      }
      let sum = totalArr.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
      });
      return sum.toFixed(2);
    } else {
      return;
    }
  };

  const productArr = cartProduct.map((item, index) => {
    return (
      <CartProductCard
        key={index}
        img={item.image}
        quantity={item.quantity}
        title={item.title}
        price={item.price}
        handleRemove={() => handleRemove(index)}
        handleIncrease={() => handleIncrease(index)}
        handleDecrease={() => handleDecrease(index)}
      />
    );
  });

  return (
    <CartStyle>
      {item === 0 && (
        <div>
          <h2>Cart is empty.</h2>
        </div>
      )}

      {productArr}
      {item >= 1 && (
        <span className="total">
          <span className="total__word">Total Amount:</span> ${total()}
        </span>
      )}
    </CartStyle>
  );
};

export default Cart;
