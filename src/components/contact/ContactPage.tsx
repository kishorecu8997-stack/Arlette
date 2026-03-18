import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import { ContactForm } from "./ContactForm";
import "./contact.css";
import locationIconUrl from "../../assets/Location.png";

const saibabaColonyLocation: [number, number] = [11.151139078080206, 77.04231435376536];

const customIcon = L.icon({
  iconUrl: locationIconUrl,
  iconSize: [75, 75], 
  iconAnchor: [12, 41], 
  popupAnchor: [1, -34], 
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
                  We welcome your feedback and suggestions our team is here for you anytime.
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
          <Marker position={saibabaColonyLocation} icon={customIcon}>
            <Popup>
              Saibaba Colony, Coimbatore, Tamil Nadu, India
              <br />
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${saibabaColonyLocation[0]},${saibabaColonyLocation[1]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
}

export default ContactPage;
