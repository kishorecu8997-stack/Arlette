import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { ContactForm } from "./ContactForm";
import "./contact.css";

const saibabaColonyLocation: [number, number] = [11.0168, 76.9446];

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function ContactPage() {
  return (
    <section className="contact-page">
      <div className="contact-page__container">
        <div className="contact-page__grid">
          <article className="contact-page__info">
            <h1>Contact Us</h1>
            <p>
              We provide reliable, scalable solutions that empower organizations to improve efficiency, 
              make smarter decisions, and drive sustainable growth.
            </p>

           <div className="contact-page__contact-list">
  <div className="contact-page__contact-left">
    <p>support@arlette.com</p>
    <p>+91 99884 30122</p>
    <p>+91 99884 30233</p>
  </div>

  <div className="contact-page__contact-right">
    <h3>Address</h3>
    <p>
      John Doe, 123 Fake Street,<br />
      Somewhere, CA 90210, USA.
    </p>
  </div>
</div>
            

            <div className="contact-page__split">
              
              <div>
                <h3>Customer Support</h3>
                <p>
                  Our support team is available around the clock to address any
                  concerns or queries you may have.
                </p>
              </div>
              <div>
                <h3>Feedback & Suggestion</h3>
                <p>
                  Our support team is available around the clock to address any
                  concerns or queries you may have.
                </p>
              </div>
            </div>
          </article>

          <ContactForm />
        </div>
      </div>

      <div className="contact-page__map-wrap">
        <MapContainer
          center={saibabaColonyLocation}
          zoom={14}
          scrollWheelZoom
          className="contact-page__map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={saibabaColonyLocation}>
            <Popup>Saibaba Colony, Coimbatore, Tamil Nadu, India</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
}

export default ContactPage;
