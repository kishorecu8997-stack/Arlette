import React from "react";
import { Link } from "react-router-dom";
import type { Product } from "../../types/product";
import industrialWorkersImage from "../../assets/infra4.png";
import "./MegaMenu.css";

type MegaMenuProps = {
  products: Product[];
  onBecomeCustomerClick: () => void;
  onClose?: () => void;
};

const MegaMenu: React.FC<MegaMenuProps> = ({
  products,
  onBecomeCustomerClick,
  onClose,
}) => {

  const handleItemClick = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur(); // Remove focus to prevent sticky hover states
    }
    if (onClose) onClose();
  };

  // Add a placeholder product if the list is short
  const allProducts = [...products];
  if (allProducts.length < 4) {
    allProducts.push({
      id: 4,
      name: "Energy System",
      slug: "energy-system",
      description: "Placeholder description",
      price: 0,
      images: [],
    });
  }

  const midPoint = Math.ceil(allProducts.length / 2);
  const firstColumnProducts = allProducts.slice(0, midPoint);
  const secondColumnProducts = allProducts.slice(midPoint);

  return (
    <>
      <style>
        {`
          .mega-menu {
            animation: megaMenuFadeSlide 0.25s ease-out forwards;
            transform-origin: top;
          }
          @keyframes megaMenuFadeSlide {
            0% { opacity: 0; transform: translateX(-50%) translateY(10px); }
            100% { opacity: 1; transform: translateX(-50%) translateY(0); }
          }
          .mega-menu-middle, .mega-menu-right {
            border-left: 1px solid #f3f4f6;
            padding-left: 32px;
          }
          .product-link-card {
            display: flex;
            align-items: center;
            padding: 12px 16px;
            margin-bottom: 8px;
            border-radius: 8px;
            text-decoration: none;
            color: #4b5563;
            font-weight: 500;
            font-size: 0.95rem;
            transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;
          }
          .product-link-card:hover {
            background-color: #f9fafb;
            color: #111827;
            transform: translateX(6px);
          }
          .product-link-bullet {
            width: 6px;
            height: 6px;
            background-color: #d1d5db;
            margin-right: 14px;
            border-radius: 1px;
            transition: background-color 0.3s ease, transform 0.3s ease;
          }
          .product-link-card:hover .product-link-bullet {
            background-color: #111827;
            transform: scale(1.5);
          }
          .mega-customer-card {
            border-radius: 12px;
            overflow: hidden;
            transition: transform 0.4s ease, box-shadow 0.4s ease;
            background: #ffffff;
          }
          .mega-customer-card:hover {
            transform: scale(1.03) translateY(-4px);
            box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08);
          }
          .customer-button {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .customer-button .arrow {
            transition: transform 0.3s ease;
          }
          .customer-button:hover .arrow {
            transform: translateX(6px);
          }
        `}
      </style>
      {/* Overlay */}
      <div className="mega-menu-overlay"></div>

      <div className="mega-menu">
        <div className="mega-menu-content">
          {/* LEFT */}
          <div className="mega-menu-left">
            <span className="products-label">Products</span>
            <h2>
              Built On Precision
              <br />
              Driven By Quality
            </h2>
            <Link to="/products" className="view-more-button" onClick={handleItemClick}>
              View More →
            </Link>
          </div>

          {/* MIDDLE */}
          <div className="mega-menu-middle">
            <div className="product-links-column">
              {firstColumnProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.slug}`}
                  className="product-link-card"
                  onClick={handleItemClick}
                >
                  <span className="product-link-bullet" aria-hidden="true"></span>
                  {product.name}
                </Link>
              ))}
            </div>

            <div className="product-links-column">
              {secondColumnProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.slug}`}
                  className="product-link-card"
                  onClick={handleItemClick}
                >
                  <span className="product-link-bullet" aria-hidden="true"></span>
                  {product.name}
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="mega-menu-right">
            <div className="customer-card mega-customer-card">
              <img
                src={industrialWorkersImage}
                alt="Industrial Workers"
                className="card-image"
              />
              <button
                onClick={() => {
                  handleItemClick();
                  onBecomeCustomerClick();
                }}
                className="customer-button"
              >
                Become a Customer <span className="arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaMenu;