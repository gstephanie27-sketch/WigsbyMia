import { Footer, Nav } from "./SiteChrome";

const cards = [
  ["cc-instagram", "Instagram", "📷", "@wigsbymiakelly", "Follow along for new arrivals, styling inspiration, and behind-the-scenes.", "https://www.instagram.com/wigsbymiakelly/", "Follow on Instagram"],
  ["cc-tiktok", "TikTok", "♪", "@wigsbymiakelly", "Watch tutorials, transformations, and wig reveals on TikTok.", "https://www.tiktok.com/@wigbymiakelly3276", "Follow on TikTok"],
  ["cc-facebook", "Facebook", "●", "Mia Kelly", "Connect with Mia personally on Facebook.", "https://www.facebook.com/mia.jenkins.142", "Connect on Facebook"],
  ["cc-group", "Facebook Group", "◉", "Wigs By Mia Kelly", "Join our community for exclusive updates, member deals, and wig care tips.", "https://www.facebook.com/groups/1912365799347285", "Join the Group"],
];

export default function ContactPage() {
  return (
    <>
      <Nav contact />
      <main className="contact-page">
        <section className="contact-hero">
          <p className="contact-eyebrow">Get in Touch</p>
          <h1 className="contact-h1">Let&apos;s <em>Connect</em></h1>
          <p className="contact-tagline">We&apos;d love to hear from you—reach out on any platform below.</p>
        </section>
        <section className="contact-body" aria-label="Contact options">
          {cards.map(([tone, platform, icon, name, copy, href, button]) => (
            <article className={`contact-card ${tone}`} key={platform}>
              <p className="card-platform">{platform}</p>
              <div className="card-icon" aria-hidden="true">{icon}</div>
              <h2 className="card-name">{name}</h2>
              <p className="card-handle">{copy}</p>
              <a href={href} target="_blank" rel="noopener noreferrer" className="card-btn">{button} <span>→</span></a>
            </article>
          ))}
          <article className="contact-card cc-phone">
            <p className="card-platform">Call Us</p>
            <div className="card-icon" aria-hidden="true">☎</div>
            <h2 className="card-name">616-634-1357</h2>
            <p className="card-handle">Call to speak with Mia about appointments, wig questions, or your custom order.</p>
            <a href="tel:+16166341357" className="card-btn">Call Now <span>→</span></a>
          </article>
          <article className="contact-card cc-email">
            <p className="card-platform">Email Us</p>
            <div className="card-icon email-icon" aria-hidden="true">✉</div>
            <h2 className="card-name">wigsbymiakelly@gmail.com</h2>
            <p className="card-handle">For custom orders, wholesale inquiries, or questions—we typically respond within 24–48 hours.</p>
            <a href="mailto:wigsbymiakelly@gmail.com" className="card-btn">Send an Email <span>→</span></a>
          </article>
        </section>
        <section className="contact-cta">
          <div className="contact-cta-inner">
            <h2>Ready to <em>Book an Appointment?</em></h2>
            <p>Book your hair service or wig install directly through our online booking system.</p>
            <div className="cta-btns">
              <a href="mailto:wigsbymiakelly@gmail.com?subject=Appointment%20Inquiry" target="_blank" rel="noopener noreferrer" className="btn-book">Inquire About an Appointment</a>
              <a href="/#collections" target="_blank" rel="noopener noreferrer" className="btn-gold">Shop Wigs</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
