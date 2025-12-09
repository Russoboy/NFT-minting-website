import "./ContactSection.css";

export default function ContactSection() {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-sub">
          Have questions about minting, partnerships, or support?  
          Reach out and our team will get back to you shortly.
        </p>

        <div className="contact-grid">
          
          {/* INFO SECTION */}
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Email: support@Opulentmint.com</p>
            <p>Partnerships: business@Opulentmint.com</p>
            <p>Location: Remote • New York City</p>

            <div className="socials">
              <a href="#">Twitter</a>
              <a href="#">Discord</a>
              <a href="#">Instagram</a>
            </div>
          </div>

          {/* FORM SECTION */}
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>

        </div>
      </div>
    </section>
  );
}
