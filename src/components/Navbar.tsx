import { useState } from "react";
import { NavLink } from "react-router-dom";
import arletteLogo from "../assets/Group 1.png";
import { products } from "../data/products";
import MegaMenu from "./product/MegaMenu";
import "./Navbar.css";

type NavbarProps = {
  onEnquireClick: () => void;
};

function Navbar({ onEnquireClick }: NavbarProps) {
  const [isMegaMenuVisible, setMegaMenuVisible] = useState(false);

  const navClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? "border-b-2 border-black pb-1" : "pb-1 hover:border-b-2 hover:border-gray-300";

  const handleBecomeCustomerClick = () => {
    setMegaMenuVisible(false);
    onEnquireClick();
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div
        className="mx-auto py-4 flex items-center justify-between"
        style={{ width: "min(1720px, calc(100% - 100px))" }}
      >
        <div className="flex items-center">
          <img src={arletteLogo} alt="Arlette" className="h-8 w-auto mr-2" />
          <h1 className="text-xl font-semibold">Arlette</h1>
        </div>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <NavLink to="/" end className={navClassName}>
            Home
          </NavLink>
          <NavLink to="/about" className={navClassName}>
            About Us
          </NavLink>
          <div
            className="nav-item-container"
            onMouseEnter={() => setMegaMenuVisible(true)}
            onMouseLeave={() => setMegaMenuVisible(false)}
          >
            <NavLink to="/products" className={navClassName}>
              Product
            </NavLink>
            {isMegaMenuVisible && (
              <MegaMenu
                products={products}
                onBecomeCustomerClick={handleBecomeCustomerClick}
              />
            )}
          </div>
          <NavLink to="/career" className={navClassName}>
            Career
          </NavLink>
          <NavLink to="/contact" className={navClassName}>
            Contact Us
          </NavLink>
        </nav>

        <button onClick={onEnquireClick} className="bg-black text-white px-4 py-2 rounded-lg text-sm hover-effect">
          Enquire
        </button>
      </div>
    </header>
  );
}

export default Navbar;

