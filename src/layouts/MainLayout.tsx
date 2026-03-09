import { useEffect, useState, Children, cloneElement } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Popup } from "../components/Popup";
import { ContactForm } from "../components/contact/ContactForm";

function MainLayout() {
  const location = useLocation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-white min-h-screen">
      <Navbar onEnquireClick={() => setIsPopupOpen(true)} />
      <Outlet context={{ onApplyClick: () => setIsPopupOpen(true) }} />
      <Footer />
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <ContactForm />
      </Popup>
    </div>
  );
}

export default MainLayout;
