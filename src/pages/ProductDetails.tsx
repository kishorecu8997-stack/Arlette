import { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import certificate from "../assets/certificatelogo.png";

import { products } from "../data/products";
import "./ProductDetails.css";

function ProductDetails() {
  const { slug } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const product = useMemo(
    () => products.find((item) => item.slug === slug),
    [slug],
  );

  useEffect(() => {
    window.scrollTo(0, 0);

    if (product && product.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % product.images.length,
        );
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [product]);

  if (!product) {
    return <div className="product-details-not-found">Product not found.</div>;
  }

  const handleThumbClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const childImages = [...product.images];
  const mainImage = childImages.splice(currentImageIndex, 1)[0];
  if (childImages.length > 3) {
    childImages.length = 3;
  }

  const certifications = [
    {
      number: "ISO999112200",
      image: certificate,
    },
    {
      number: "ISO999112200",
      image: certificate,
    },
    {
      number: "ISO999112200",
      image: certificate,
    },
    {
      number: "ISO999112200",
      image: certificate,
    },
  ];

  return (
    <section className="product-details page-transition" style={{ maxWidth: "1440px", width: "100%", margin: "0 auto", padding: "2rem 5%" }}>
        <p className="product-details__breadcrumb">
          / Products / {product.name}
        </p>

        <div className="product-details__top">
          {/* LEFT IMAGE SECTION */}
          <div className="product-details__gallery">
            <img
              className="product-details__main-image"
              src={mainImage}
              alt={product.name}
            />

            <div className="product-details__thumbs">
              {childImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  onClick={() =>
                    handleThumbClick(product.images.indexOf(image))
                  }
                />
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="product-details__info">
            <p className="product-details__series hover-effect">
              Series: Art Steel 0023
            </p>

            <h1>IT’S WHAT’S BEHIND OUR PRODUCT</h1>

            <p className="product-details__model hover-effect">
              Model: {product.name}
            </p>

            <p className="product-details__description hover-effect">
              {product.description}
            </p>

            {/* Certifications */}
            <h4>Key Certificationss</h4>

            <div className="product-details__certifications">
              {certifications.map((cert, index) => (
                <div className="cert" key={index}>
                  <img src={cert.image} alt={cert.number} />
                  <span>{cert.number}</span>
                </div>
              ))}
            </div>

            {/* Specs */}
            <h4>Properties & Specs</h4>

            <div className="product-details__specs">
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

        {/* Brochure section */}

        <div className="product-details__brochure">
          <h2>PRODUCT BROCHURE AND SERVICE CENTER</h2>

          <div className="product-details__actions">
            <button>PRODUCT BROCHURE</button>

            <button>GET A QUOTE</button>

            <button>GET CONNECT WITH US</button>
          </div>
        </div>

        {/* Tabs */}

        <div className="product-details__tabs">
          <div className="tabs">
            <span className="active">Technical Specification</span>
            <span>Application</span>
            <span>Downloads</span>
            <span>Certification</span>
          </div>

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
  )       
}

export default ProductDetails;