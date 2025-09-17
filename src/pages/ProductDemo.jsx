import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";

const ProductDemo = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Sample products data
  const sampleProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 45000,
      originalPrice: 60000,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      rating: 4.8,
      reviews: 245,
      inStock: true,
      discount: 25,
      category: "Electronics",
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 89000,
      originalPrice: 120000,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
      rating: 4.6,
      reviews: 189,
      inStock: true,
      discount: 26,
      category: "Wearables",
    },
    {
      id: 3,
      name: "Organic Cotton T-Shirt",
      price: 12000,
      originalPrice: 15000,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
      rating: 4.4,
      reviews: 67,
      inStock: true,
      discount: 20,
      category: "Fashion",
    },
    {
      id: 4,
      name: "Professional Camera Lens",
      price: 250000,
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1606983340077-ab2500bc4c53?w=300&h=300&fit=crop",
      rating: 4.9,
      reviews: 312,
      inStock: false,
      discount: null,
      category: "Photography",
    },
    {
      id: 5,
      name: "Ergonomic Office Chair",
      price: 85000,
      originalPrice: 110000,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop",
      rating: 4.7,
      reviews: 156,
      inStock: true,
      discount: 23,
      category: "Furniture",
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      price: 28000,
      originalPrice: 35000,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",
      rating: 4.3,
      reviews: 98,
      inStock: true,
      discount: 20,
      category: "Audio",
    },
  ];

  const handleAddToCart = (productWithQuantity) => {
    const existingItem = cart.find(
      (item) => item.id === productWithQuantity.id
    );

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === productWithQuantity.id
            ? {
                ...item,
                quantity: item.quantity + productWithQuantity.quantity,
              }
            : item
        )
      );
    } else {
      setCart([...cart, productWithQuantity]);
    }

    // Show success message (you can implement a toast notification here)
    alert(`Added ${productWithQuantity.name} to cart!`);
  };

  const handleAddToWishlist = (product) => {
    const isAlreadyInWishlist = wishlist.find((item) => item.id === product.id);

    if (isAlreadyInWishlist) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
      alert(`Removed ${product.name} from wishlist!`);
    } else {
      setWishlist([...wishlist, product]);
      alert(`Added ${product.name} to wishlist!`);
    }
  };

  const handleQuickView = (product) => {
    // You can implement a modal or navigate to product details page
    alert(`Quick view for: ${product.name}`);
  };

  const getTotalCartItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalCartValue = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container-fluid py-5">
      {/* Header with Cart/Wishlist Info */}
      <div className="container">
        <div className="row mb-5">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h2 className="fw-bold mb-2">Our Products</h2>
                <p className="text-muted">
                  Discover amazing products at great prices
                </p>
              </div>
              <div className="d-flex gap-3">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-danger me-2"
                  />
                  <span className="fw-bold">{wishlist.length} Wishlist</span>
                </div>
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="text-primary me-2"
                  />
                  <span className="fw-bold">
                    {getTotalCartItems()} Items (₦
                    {getTotalCartValue().toLocaleString()})
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="row">
          {sampleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onAddToWishlist={handleAddToWishlist}
              onQuickView={handleQuickView}
            />
          ))}
        </div>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <div className="row mt-5">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0">Cart Summary</h5>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((item) => (
                          <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>₦{item.price.toLocaleString()}</td>
                            <td>{item.quantity}</td>
                            <td>
                              ₦{(item.price * item.quantity).toLocaleString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <th colSpan="3">Total</th>
                          <th>₦{getTotalCartValue().toLocaleString()}</th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <button className="btn btn-primary btn-lg">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDemo;
