import { products } from "../../data/products";
import "./product.css";
import { Link } from "react-router-dom";

const primaryFilters = [
  "Automotive",
  "Aerospace",
  "Energy",
  "Manufacturing",
  "Infrastructure",
];

const secondaryFilters = ["Consulting", "Fabrication", "Maintenance"];

const specialties = [
  "Customize And Create",
  "Meet The Team",
  "Trust",
  "Customize And Create",
  "Customize And Create",
  "Customize And Create",
];

function ProductPage() {
  return (
    <section className="product-page">
      <div className="product-page__container">
        <p className="product-page__crumb">/ Products</p>
        <div className="product-page__content">
          <aside className="product-page__sidebar">
            <div className="product-filter">
              <h3>Filter</h3>
              <p>Refine Your View By Sector</p>

              <h4>Industry Verticals</h4>
              <ul>
                {primaryFilters.map((item) => (
                  <li key={item}>
                    <span aria-hidden="true">✦</span>
                    {item}
                  </li>
                ))}
              </ul>

              <h4>Industry Verticals</h4>
              <ul>
                {secondaryFilters.map((item) => (
                  <li key={item}>
                    <span aria-hidden="true">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="product-specialties">
              <h4>We Are Specialities</h4>
              <ul>
                {specialties.map((item, index) => (
                  <li key={`${item}-${index}`}>
                    <span aria-hidden="true">◌</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <main className="product-page__main">
            <h1>IT’S WHAT’S BEHIND OUR PRODUCT</h1>
            <div className="product-grid">
              {products.map((card, index) => (
                <Link
                  key={`${card.name}-${index}`}
                  to={`/products/${card.slug}`}
                  
                  style={{ textDecoration: "none", color: "inherit", display: "contents" }}
                >
                  <article className="product-card">
                    <div className="product-card__image-wrap">
                      <img src={card.images[0]} alt={card.name} />
                      <span className="product-card__arrow" aria-hidden="true">
                        →
                      </span>
                    </div>
                    <h2>{card.name}</h2>
                    <p className="hover-effect">{card.description}</p>
                  </article>
                </Link>
              ))}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}


export default ProductPage;
