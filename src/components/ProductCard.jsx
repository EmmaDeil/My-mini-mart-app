import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({
  product = {
    id: 1,
    name: "Sample Product",
    price: 29.99,
    image: "https://via.placeholder.com/300x300",
  },
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (action) => {
    if (action === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({ ...product, quantity });
    }
  };

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card h-100">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
        />

        {/* Product Info */}
        <div className="card-body">
          {/* Product Name */}
          <h6 className="card-title">{product.name}</h6>

          {/* Price */}
          <h5 className="text-primary fw-bold">
            ₦{product.price.toLocaleString()}
          </h5>

          {/* Quantity Selector */}
          <div className="d-flex align-items-center justify-content-between mb-3">
            <span>Qty:</span>
            <div className="d-flex align-items-center">
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => handleQuantityChange("decrease")}
                disabled={quantity <= 1}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <span className="mx-2">{quantity}</span>
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => handleQuantityChange("increase")}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="btn btn-primary w-100" onClick={handleAddToCart}>
            <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
