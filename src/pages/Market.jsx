import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

const Market = () => {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Beauty Chocolate Book",
      price: 20000,
      image: "testimg.jpg",
    },
    {
      id: 2,
      name: "Organic Face Cream",
      price: 15000,
      image: "testimg.jpg",
    },
  ];

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`Added ${product.name} to cart!`);
  };

  return (
    <div className="container py-5">
      {/* <h2 className="text-center mb-4">Market</h2> */}
      <div className="row">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Market;
