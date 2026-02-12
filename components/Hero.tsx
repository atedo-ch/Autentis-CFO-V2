
import { FC } from 'react';
import { Button } from './Button';
import { FileText, CheckCircle, Calendar } from 'lucide-react';
import { ROICalculator } from './ROICalculator';

interface HeroProps {
  onOpenWhitepaper: () => void;
}

export const Hero: FC<HeroProps> = ({ onOpenWhitepaper }) => {
  const openScheduling = () => {
    window.open('https://app.lemcal.com/@bernhard-kurth/30-minutes', '_blank');
  };

  return (
    <section className="hero-section">
      {/* Background Image & Overlay */}
      <div className="hero-bg-wrapper">
        <img 
          src="https://raw.githubusercontent.com/atedo-ch/autentis-brandassets/main/Gemini_Generated_Image_kg2lnxkg2lnxkg2l.png" 
          alt="CFO Strategic Talent Intelligence" 
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-grid">
          
          <div className="hero-text-col">
            <div className="hero-badge">
              <FileText size={14} style={{ marginRight: '0.5rem' }} />
              Whitepaper: Strategic Talent Intelligence
            </div>
            
            <h1 className="hero-title">
              Sichern Sie Ihren <span>Human Capital ROI</span> messbar ab.
            </h1>
            <p className="hero-description">
              Fehlbesetzungen kosten Schweizer Unternehmen bis zu 130'000 CHF pro Fall. Fordern Sie unsere ökonomische Analyse an und erfahren Sie, wie Sie Auswahlrisiken systematisch minimieren.
            </p>
            
            <div className="hero-actions">
              <Button className="btn-lg" onClick={onOpenWhitepaper}>
                Whitepaper jetzt anfordern (PDF)
              </Button>
              <Button className="btn-lg" variant="outline" onClick={openScheduling}>
                <Calendar size={18} style={{ marginRight: '0.5rem' }} />
                Bernhard kennenlernen
              </Button>
            </div>

            <div className="hero-contact-minimal">
              <img 
                src="https://autentis.ch/wp-content/uploads/2024/11/kurth.jpg" 
                alt="Bernhard Kurth" 
                className="hero-contact-avatar"
              />
              <div className="hero-contact-info">
                <div className="hero-contact-name">Bernhard Kurth</div>
                <div className="hero-contact-role">Geschäftsführer</div>
                <div className="hero-contact-details">
                  <a href="tel:+41443829397">T +41 44 382 93 97</a><br />
                  <a href="mailto:info@autentis.ch">info@autentis.ch</a>
                </div>
              </div>
            </div>

            <p className="hero-trust">
              <CheckCircle size={16} color="var(--green-600)" />
              Wissenschaftliche Methodik ohne Newsletter-Zwang.
            </p>
          </div>

          <div className="hero-calc-col" id="roi-check">
            <ROICalculator />
          </div>
        </div>
      </div>
    </section>
  );
};
