import React, { useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../../types/product";
import industrialWorkersImage from "../../assets/infra4.png";
import "./MegaMenu.css";

type MegaMenuProps = {
  products: Product[];
  onBecomeCustomerClick: () => void;
};

const MegaMenu: React.FC<MegaMenuProps> = ({
  products,
  onBecomeCustomerClick,
}) => {
  // State to force the menu to hide when a link is clicked
  const [isHidden, setIsHidden] = useState(false);

  const handleItemClick = () => {
    setIsHidden(true);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur(); // Remove focus to prevent sticky hover states
    }
    setTimeout(() => setIsHidden(false), 150); // Restore visibility class so it can be hovered again later
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
      {/* Overlay */}
      <div className="mega-menu-overlay" style={{ display: isHidden ? 'none' : undefined }}></div>

      <div className="mega-menu" style={{ display: isHidden ? 'none' : undefined }}>
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
                  className="product-link"
                  onClick={handleItemClick}
                >
                  {product.name}
                </Link>
              ))}
            </div>

            <div className="product-links-column">
              {secondColumnProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.slug}`}
                  className="product-link"
                  onClick={handleItemClick}
                >
                  {product.name}
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="mega-menu-right">
            <div className="customer-card">
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
                Become a Customer →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaMenu;