import { useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/Rectangle 9.png";
import gridimg from "../../assets/Rectangle 11.png";
import { products } from "../../data/products";

function StatsSection() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section className="stats-section home-container">
      <div className="stats-wrap">
        <div className="stats-left">
          <img src={heroImage} alt="Welding" className="stats-welding-image" />
        </div>

        <div className="stats-panel" onMouseLeave={() => setActiveImage(null)}>
          <p className="stats-label">Our Products</p>
          <h3 className="stats-title">Building Meaningful Brand Experiences Through Design And Technology</h3>

          <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", minHeight: "320px" }}>
            <div className="stats-lines" style={{ flex: 1 }}>
              {products.slice(0, 4).map((item) => (
                <Link 
                  to={`/products/${item.slug}`} 
                  key={item.slug} 
                  className="stats-line-item"
                  style={{ textDecoration: "none", color: "inherit", display: "block" }}
                  onMouseEnter={() => setActiveImage(item.images[0])}
                >
                  <span>{item.name}</span>
                </Link>
              ))}
              <Link 
                to="/products" 
                className="stats-line-item" 
                style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: "0.5rem" }}
                onMouseEnter={() => setActiveImage(null)}
              >
                <span>Visit Our Product Page</span>
                <span style={{ fontSize: "1.2rem", transition: "transform 0.2s" }} className="hover-arrow">&#x2197;</span>
              </Link>
            </div>

            {activeImage && (
              <img 
                key={activeImage} 
                src={activeImage} 
                alt="Product preview" 
                className="stats-inline-image page-transition" 
                style={{ position: "static", width: "320px", height: "320px", objectFit: "cover", borderRadius: "12px", flexShrink: 0 }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
