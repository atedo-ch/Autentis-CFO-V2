
import { useState, FC, ChangeEvent, FormEvent } from 'react';
import { Button } from './Button';
import { CheckCircle, AlertCircle, Loader2, Download } from 'lucide-react';

// KONFIGURATION: Hier Ihre Formspree-ID einfügen
const FORMSPREE_ID = 'xrbnlgdb'; 
const PDF_URL = 'https://raw.githubusercontent.com/atedo-ch/autentis-brandassets/main/251204_autentis_Whitepaper_Strategic-Talent-Intelligence.pdf';

export const ContactForm: FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: 'Whitepaper Request: Strategic Talent Intelligence'
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.email) {
      setStatus('error');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        // Automatisch das PDF in einem neuen Tab öffnen
        window.open(PDF_URL, '_blank');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div id="contact" className="contact-card" data-event="wp_form_view">
      <div className="contact-header">
        <h3 className="contact-title">Whitepaper: Strategic Talent Intelligence</h3>
        <p className="contact-subtitle">Erhalten Sie die ökonomische Analyse direkt per E-Mail.</p>
      </div>

      {status === 'success' ? (
        <div className="success-message" data-event="wp_download_success">
          <CheckCircle className="success-icon" />
          <h4 className="contact-title">Anfrage erfolgreich!</h4>
          <p className="contact-subtitle">
            Der Download startet automatisch in einem neuen Tab.<br />
            Sollte sich kein Fenster öffnen, <a href={PDF_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue-600)', fontWeight: 600, textDecoration: 'underline' }}>klicken Sie bitte hier</a>.
          </p>
          
          <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--blue-50)', borderRadius: '0.5rem', border: '1px solid var(--blue-100)', width: '100%' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--blue-900)', fontWeight: 600, marginBottom: '1rem' }}>Optional: Ergebnis kurz einordnen?</p>
            <Button variant="primary" size="md" fullWidth onClick={() => window.open('https://app.lemcal.com/@bernhard-kurth/30-minutes', '_blank')}>
              15 Min. Expertensparring anfragen
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="form-stack">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Geschäftliche E-Mail *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className="form-input"
                placeholder="cfo@unternehmen.ch"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Unternehmen (Optional)</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className="form-input"
                placeholder="Firmenname AG"
              />
            </div>
          </div>
          
          <div className="form-row">
             <div className="form-group">
              <label htmlFor="firstName">Vorname (Optional)</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Nachname (Optional)</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className="form-input"
              />
            </div>
          </div>

          {status === 'error' && (
             <div className="error-box">
               <AlertCircle size={16} style={{ marginRight: '0.5rem' }} />
               Bitte prüfen Sie Ihre Eingabe.
             </div>
          )}

          <Button 
            type="submit" 
            fullWidth 
            disabled={status === 'submitting'}
            className="btn-lg"
            data-event="wp_submit_click"
          >
            {status === 'submitting' ? (
              <Loader2 className="spin" size={20} />
            ) : (
              <>
                <Download size={18} style={{ marginRight: '0.5rem' }} />
                Whitepaper anfordern (PDF)
              </>
            )}
          </Button>
          
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--slate-400)', lineHeight: 1.4 }}>
              Ihre Daten werden gemäss Schweizer DSG geschützt. <br />
              Kein Newsletter-Spam. Direkter Download-Link.
            </p>
          </div>
        </form>
      )}
    </div>
  );
};
