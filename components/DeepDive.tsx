import { FC } from 'react';
import { Check } from 'lucide-react';

export const DeepDive: FC = () => {
  return (
    <section id="loesungen" className="deep-dive-section">
      <div className="container">
        
        <div className="section-header">
          <h2 className="section-title">Massgeschneiderte Lösungen</h2>
          <p className="section-subtitle">
            Ob C-Level Executive oder Volumen-Recruiting – wir haben das passende Instrument.
          </p>
        </div>

        <div className="solutions-grid">
          
          {/* Solution A */}
          <div className="solution-card">
            <div className="solution-card-header">
              <span className="solution-label">LÖSUNG A</span>
              <h3 className="solution-card-title">Management Diagnostik</h3>
              <p className="solution-card-subtitle">Die "Versicherung" für Führungskräfte Entscheidungen.</p>
            </div>
            <div className="solution-card-body">
              <p className="solution-desc">
                Bei Besetzungen von Führungspositionen ist der Schaden einer Fehlentscheidung immens. Unsere Management Diagnostik liefert Ihnen eine tiefgreifende Analyse der Führungskompetenzen, strategischen Denkweise und Integrität Ihrer Kandidaten.
              </p>
              <ul className="solution-list">
                <li className="solution-item">
                  <Check size={18} className="solution-check" />
                  <span>Unabhängige Zweitmeinung für die Entscheidungsträger</span>
                </li>
                <li className="solution-item">
                  <Check size={18} className="solution-check" />
                  <span>Vergleich mit High-Performance-Benchmarks</span>
                </li>
                <li className="solution-item">
                  <Check size={18} className="solution-check" />
                  <span>Klarer Onboarding-Fahrplan zur Risikoreduktion und Entwicklungsempfehlungen</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Solution B */}
          <div className="solution-card">
            <div className="solution-card-header">
              <span className="solution-label">LÖSUNG B</span>
              <h3 className="solution-card-title">HPR & IPE</h3>
              <p className="solution-card-subtitle">Automatisierte Effizienz für Volumen-Recruiting.</p>
            </div>
            <div className="solution-card-body">
              <p className="solution-desc">
                Skalierbare Prozesse erfordern intelligente Tools. Mit IPE (Individual Potential Evaluation) und HPR (High Potential Ranking) automatisieren Sie die Vorauswahl, ohne an Qualität zu verlieren.
              </p>
              <ul className="solution-list">
                <li className="solution-item">
                  <Check size={18} className="solution-check" />
                  <span>Bis zu 40% weniger Interviewzeit durch präzises Pre-Screening</span>
                </li>
                <li className="solution-item">
                  <Check size={18} className="solution-check" />
                  <span>Objektives Ranking aller Bewerber nach Eignung</span>
                </li>
                <li className="solution-item">
                  <Check size={18} className="solution-check" />
                  <span>Kosteneffizient auch bei hohen Bewerberzahlen</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Solution C */}
          <div className="solution-card highlight-card">
            <div className="solution-card-header">
              <span className="solution-label">LÖSUNG C</span>
              <h3 className="solution-card-title">IPE & Management Sim.</h3>
              <p className="solution-card-subtitle">Online-Lösung für schlanke Budgets.</p>
            </div>
            <div className="solution-card-body">
              <p className="solution-desc">
                Professionelle Auswahlentscheidungen müssen keine Frage des Budgets sein. Kombinieren Sie die Persönlichkeitsanalyse (IPE) mit unseren handlungsorientierten Simulationen (HighLight/UTOPIA).
              </p>
              <ul className="solution-list">
                <li className="solution-item">
                  <Check size={18} className="solution-check" />
                  <span><strong>Ganzheitliche Kompetenzmessung:</strong> Fundierte Erfassung von Persönlichkeit, Management-Skills und Problemlöseverhalten.</span>
                </li>
                <li className="solution-item">
                  <Check size={18} className="solution-check" />
                  <span><strong>Realitätsnahe Arbeitsproben:</strong> Bewerber beweisen ihre Fähigkeiten in praxisnahen Szenarien.</span>
                </li>
                <li className="solution-item">
                  <Check size={18} className="solution-check" />
                  <span><strong>Maximale Effizienz:</strong> 100% zeit- und ortsunabhängige Online-Durchführung.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};