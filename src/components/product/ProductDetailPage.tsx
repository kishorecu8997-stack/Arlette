import { useParams, Link } from "react-router-dom";
import { productCards } from "./ProductPage";
import "./product-detail.css";

function ProductDetailPage() {
  const { slug } = useParams();

  const product = productCards.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!product) {
    return (
      <section className="product-page">
        <div className="product-page__container">
          <p>Product not found.</p>
          <Link to="/products">← Back to Products</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="product-page product-detail-page">
      <div className="product-page__container">

        <p className="product-breadcrumb">
          <Link to="/products">/ Products</Link> / {product.title}
        </p>

        {/* TOP SECTION */}

        <div className="product-layout">

          {/* LEFT GALLERY */}

          <div className="product-gallery">

            <img
              src={product.image}
              alt={product.title}
              className="product-main-image"
            />

            <div className="product-thumbs">
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
            </div>

          </div>

          {/* RIGHT CONTENT */}

          <div className="product-info">

            <p className="series">Series: Art Steel 0023</p>

            <h1>IT’S WHAT’S BEHIND OUR PRODUCT</h1>

            <p className="model">Model: {product.title}</p>

            <p className="description">{product.description}</p>

            <h4>Key Certifications</h4>

            <div className="certifications">
              {["ISO999112200", "ISO999112200", "ISO999112200"].map((cert) => (
                <div className="cert-card" key={cert}>
                  <span className="cert-icon">✔</span>
                  <span>{cert}</span>
                </div>
              ))}
            </div>

            <h4>Properties & Specs</h4>

            <div className="spec-grid">

              <div>
                <span>Pressure Rating</span>
                <strong>6000 PSI</strong>
              </div>

              <div>
                <span>Body Material</span>
                <strong>SS-316L</strong>
              </div>

              <div>
                <span>Temp Range</span>
                <strong>-20° to -250° C</strong>
              </div>

              <div>
                <span>Connection</span>
                <strong>1/2”NPT</strong>
              </div>

            </div>

          </div>
        </div>

        {/* BROCHURE SECTION */}

        <section className="product-brochure">

          <h2>PRODUCT BROCHURE AND SERVICE CENTER</h2>

          <div className="brochure-actions">

            <button className="action-btn">
              ⬇ PRODUCT BROCHURE
            </button>

            <button className="action-btn">
              💬 GET A QUOTE
            </button>

            <button className="action-btn">
              ✉ GET CONNECT WITH US
            </button>

          </div>

        </section>

        {/* SPEC TABLE */}

        <table className="spec-table">

          <thead>
            <tr>
              <th>Parameter</th>
              <th>Specification</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Nominal Diameter</td>
              <td>DN15 - DN50</td>
            </tr>
            <tr>
              <td>Nominal Diameter</td>
              <td>DN15 - DN50</td>
            </tr>
            <tr>
              <td>Nominal Diameter</td>
              <td>DN15 - DN50</td>
            </tr>
            <tr>
              <td>Nominal Diameter</td>
              <td>DN15 - DN50</td>
            </tr>
          </tbody>

        </table>

      </div>
    </section>
  );
}

export default ProductDetailPage;