// src/components/ProductDetail.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';

const ProductDetail = ({ match }) => {
  const productId = match.params.id; // Assuming you have a route parameter for the product ID
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  // Find the product with the matching ID
  const product = products.find((p) => p.id === productId);

  const handleAddToCart = () => {
    // Dispatch an action to add the product to the cart
    dispatch(addToCart(product));
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <h3>{product.name}</h3>
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
