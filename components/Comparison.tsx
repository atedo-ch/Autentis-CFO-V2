
import { FC } from 'react';
import { XCircle, CheckCircle } from 'lucide-react';
import { Button } from './Button';

interface ComparisonProps {
  onOpenWhitepaper: () => void;
}

export const Comparison: FC<ComparisonProps> = ({ onOpenWhitepaper }) => {
  return (
    <section className="comparison-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Vom Kostenrisiko zum strategischen Investment
          </h2>
          <p className="section-subtitle">
            Der Unterschied zwischen intuitivem Bauchgefühl und diagnostischer Präzision in harten Zahlen.
          </p>
        </div>

        <div className="comparison-grid">
          {/* Risk Side */}
          <div className="comparison-card risk">
            <h3 className="comparison-card-title">
              <span className="indicator-dot"></span>
              Traditionelle Auswahl
            </h3>
            <ul className="comparison-list">
              <li className="comparison-item">
                <div className="comparison-icon-wrapper">
                  <XCircle className="comparison-icon" size={20} />
                </div>
                <span className="comparison-text">Hohes Risiko für "False Positives" (Blender)</span>
              </li>
              <li className="comparison-item">
                <div className="comparison-icon-wrapper">
                   <XCircle className="comparison-icon" size={20} />
                </div>
                <span className="comparison-text">Versteckte Kosten durch Fluktuation</span>
              </li>
              <li className="comparison-item">
                <div className="comparison-icon-wrapper">
                   <XCircle className="comparison-icon" size={20} />
                </div>
                <span className="comparison-text">Unvorhersehbare Time-to-Productivity</span>
              </li>
              <li className="comparison-item">
                <div className="comparison-icon-wrapper">
                   <XCircle className="comparison-icon" size={20} />
                </div>
                <span className="comparison-text">Verschwendung von Recruiting-Budget</span>
              </li>
            </ul>
          </div>

          {/* Benefit Side */}
          <div className="comparison-card benefit">
            <div className="comparison-tag">
              Strategischer Fokus
            </div>
            <h3 className="comparison-card-title">
              <span className="indicator-dot"></span>
              Strategic Talent Intelligence
            </h3>
            <ul className="comparison-list">
              <li className="comparison-item">
                <div className="comparison-icon-wrapper">
                  <CheckCircle className="comparison-icon" size={20} />
                </div>
                <span className="comparison-text">98% Prognosesicherheit bei Besetzungen</span>
              </li>
              <li className="comparison-item">
                <div className="comparison-icon-wrapper">
                   <CheckCircle className="comparison-icon" size={20} />
                </div>
                <span className="comparison-text">Absicherung des Human Capital ROI</span>
              </li>
              <li className="comparison-item">
                <div className="comparison-icon-wrapper">
                   <CheckCircle className="comparison-icon" size={20} />
                </div>
                <span className="comparison-text">Objektive, auditsichere Entscheidungsgrundlage</span>
              </li>
              <li className="comparison-item">
                <div className="comparison-icon-wrapper">
                   <CheckCircle className="comparison-icon" size={20} />
                </div>
                <span className="comparison-text">Minimierung der Onboarding-Risiken</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="comparison-cta">
          <Button onClick={onOpenWhitepaper} className="btn-lg">
            Analyse jetzt lesen – Whitepaper anfordern
          </Button>
        </div>
      </div>
    </section>
  );
};
