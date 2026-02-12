import { FC } from 'react';
import { ContactForm } from './ContactForm';
import { Logo } from './Logo';

export const Footer: FC = () => {
  return (
    <footer className="footer-section">
      
      {/* Final CTA Area */}
      <div className="footer-cta-wrapper">
        <ContactForm />
      </div>

      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ display: 'inline-block', marginBottom: '1rem' }}>
              <Logo className="main-logo" />
            </a>
            <p>
              Wissenschaftlich fundierte Eignungsdiagnostik für Schweizer Unternehmen, die rechnen können.
            </p>
          </div>
          <div>
            <h4 className="footer-heading">Kontakt</h4>
            <ul className="footer-links">
              <li>Bahnhofstrasse 71</li>
              <li>8001 Zürich</li>
              <li>+41 44 382 93 97</li>
              <li>info@autentis.ch</li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Rechtliches</h4>
            <ul className="footer-links">
              <li><a href="https://autentis.ch/impressum/">Impressum</a></li>
              <li><a href="https://autentis.ch/datenschutz/">Datenschutz</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Autentis. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};