import React from "react";
import ProductCard from "../../ProductCard";
import { ShopStyle } from "../../style/shop.styled";
import { useDispatch, useSelector } from "react-redux";

import { addToCart, addQuantity } from "../../../Redux/features/Cart";

const Shop = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const cart = useSelector((state) => state.cart.cartItem);
  const dispatch = useDispatch();
  const handleClick = (index) => {
    const result = cart.findIndex((val) => val.id === products[index].id);
    if (result === -1) {
      dispatch(addToCart({ item: products[index] }));
    } else {
      dispatch(addQuantity({ index: result }));
    }
  };

  const ProducstArray = products.map((item, index) => {
    return (
      <ProductCard
        key={item.id}
        img={item.image}
        title={item.title}
        price={item.price}
        handleClick={() => handleClick(index)}
      />
    );
  });

  return (
    <ShopStyle>
      <div className="title">
        <h1>Shoppers Mart</h1>
      </div>
      {loading ? (
        <h2 className="loading">loading...</h2>
      ) : (
        <div className="products">{ProducstArray}</div>
      )}
    </ShopStyle>
  );
};

export default Shop;
