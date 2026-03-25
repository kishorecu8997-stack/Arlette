import { Link } from "react-router-dom";
import logo from "../assets/Group 1.png";
import "./Footer.css";

const companyLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/career" },
  { label: "Testimonials", to: "/career" },
];
const quickLinks = [
  { label: "Case Study", to: "/about" },
  { label: "Industry We Serve", to: "/products" },
  { label: "How We Work", to: "/about" },
  { label: "Support", to: "/contact" },
];
const socialLinks = [
  { icon: "f", label: "Facebook", href: "https://www.facebook.com" },
  { icon: "o", label: "Instagram", href: "https://www.instagram.com" },
  { icon: "in", label: "Linked In", href: "https://www.linkedin.com" },
  { icon: "x", label: "X", href: "https://x.com" },
];

function Footer() {
  return (
    <footer className="arlette-footer">
      <div className="arlette-footer__container">
        <div className="arlette-footer__top">
          <section className="arlette-footer__intro">
            <div className="arlette-footer__brand">
              <img src={logo} alt="Arlette logo" className="arlette-footer__logo" />
              <span>Arlette</span>
            </div>

            <p className="arlette-footer__tagline">
              From concept to creation, delivering precision engineered
              products you can trust.
            </p>

            <Link to="/contact" className="arlette-footer__cta">
              Request A Quote <span>&rarr;</span>
            </Link>
          </section>

          <section>
            <h4 className="arlette-footer__heading">Company</h4>
            <ul className="arlette-footer__links">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h4 className="arlette-footer__heading">Quick Links</h4>
            <ul className="arlette-footer__links">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h4 className="arlette-footer__heading">Contact Us</h4>
            <ul className="arlette-footer__social">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <span className="arlette-footer__icon">{item.icon}</span>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="arlette-footer__divider" />

        <div className="arlette-footer__bottom">
          <div className="arlette-footer__contact">
            <p className="arlette-footer__label">Call Us</p>
            <p className="arlette-footer__value">
              +91 80451  67532
              {/* <span className="arlette-footer__separator">&#9651;</span>
              +91 99884 30233 */}
            </p>
          </div>

          <div className="arlette-footer__contact arlette-footer__contact--right">
            <p className="arlette-footer__label-mail">Mail Us</p>
            <p className="arlette-footer__value">support@arlette.com</p>
          </div>
        </div>

        <p className="arlette-footer__copyright">Copyright Reserved To Praxio</p>
      </div>
    </footer>
  );
}

export default Footer;
