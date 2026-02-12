
import { FC, useEffect } from 'react';
import { X, Download, Loader2, CheckCircle, Mail } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from './Button';

interface WhitepaperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhitepaperModal: FC<WhitepaperModalProps> = ({ isOpen, onClose }) => {
  const [state, handleSubmit] = useForm("mojedjbd");

  /** 
   * Using the raw version of the GitHub link for a direct PDF viewing experience.
   * This ensures the browser opens the PDF file itself rather than the GitHub UI.
   */
  const PDF_URL = 'https://raw.githubusercontent.com/atedo-ch/autentis-brandassets/main/251204_autentis_Whitepaper_Strategic-Talent-Intelligence.pdf';

  /**
   * Side effect to handle the transition after a successful submission.
   * Opens the PDF in a new tab and eventually closes the modal.
   */
  useEffect(() => {
    if (state.succeeded) {
      // Attempt to open the PDF in a new tab immediately
      window.open(PDF_URL, '_blank');
      
      // Auto-close the modal after 5 seconds to give the user time to read the success message
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Modal schließen">
          <X size={24} />
        </button>

        <div className="modal-header">
          <div style={{ display: 'inline-flex', padding: '1rem', background: 'var(--blue-50)', borderRadius: '9999px', marginBottom: '1rem', color: 'var(--blue-600)' }}>
            <Download size={32} />
          </div>
          <h2 className="contact-title" style={{ fontSize: '1.25rem' }}>Whitepaper anfordern</h2>
          <p className="contact-subtitle">Strategic Talent Intelligence: Kostenrisiken minimieren & ROI sichern.</p>
        </div>

        <div className="modal-body">
          {state.succeeded ? (
            <div className="success-message" style={{ padding: '1rem 0' }}>
              <CheckCircle size={48} color="var(--green-500)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '0.5rem' }}>Vielen Dank!</h3>
              <p style={{ color: 'var(--slate-600)', fontSize: '0.9rem' }}>
                Ihr Download startet automatisch in einem neuen Tab. <br />
                Sollte Ihr Browser das Fenster blockiert haben, <br />
                <a href={PDF_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue-600)', fontWeight: 600, textDecoration: 'underline' }}>klicken Sie bitte hier zum Öffnen</a>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form-stack">
              <input type="hidden" name="Subject" value="Whitepaper Request from Landing Page" />
              
              <div className="form-group">
                <label htmlFor="email">Ihre geschäftliche E-Mail Adresse *</label>
                <div style={{ position: 'relative' }}>
                  <Mail size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--slate-400)' }} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="name@firma.ch"
                    style={{ paddingLeft: '2.75rem' }}
                    required
                    disabled={state.submitting}
                  />
                </div>
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  style={{ color: 'var(--red-600)', fontSize: '0.75rem', marginTop: '0.25rem' }}
                />
              </div>

              {/* Static message for Formspree identification */}
              <input type="hidden" name="message" value="Request: Strategic Talent Intelligence Whitepaper" />

              <Button type="submit" fullWidth className="btn-lg" disabled={state.submitting}>
                {state.submitting ? (
                  <Loader2 className="spin" size={20} />
                ) : (
                  <>
                    <Download size={18} style={{ marginRight: '0.5rem' }} />
                    Jetzt Whitepaper lesen (PDF)
                  </>
                )}
              </Button>
              
              <p style={{ fontSize: '0.75rem', color: 'var(--slate-400)', textAlign: 'center', marginTop: '1.25rem', lineHeight: 1.4 }}>
                Ihre Daten sind geschützt. Mit dem Absenden erhalten Sie <br />
                den direkten Download-Link sowie eine Bestätigung.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
