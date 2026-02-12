import { FC } from 'react';
import { Microscope, Award, Landmark } from 'lucide-react';

export const Trust: FC = () => {
  return (
    <section className="trust-section">
      <div className="container">
        <div className="trust-grid">
          
          <div className="trust-item">
            <div className="trust-icon-box">
              <Microscope size={32} />
            </div>
            <h3 className="trust-title">Wissenschaftlichkeit</h3>
            <p className="trust-desc">
              Keine Esoterik. Wir nutzen ausschließlich validierte psychometrische Verfahren nach DIN 33430 Standards.
            </p>
          </div>

          <div className="trust-item">
             <div className="trust-icon-box">
              <Award size={32} />
            </div>
            <h3 className="trust-title">Jahrelange Erfahrung</h3>
            <p className="trust-desc">
              Über 20 Jahre Expertise in der Zusammenarbeit mit Schweizer KMU und Großkonzernen.
            </p>
          </div>

          <div className="trust-item">
             <div className="trust-icon-box">
              <Landmark size={32} />
            </div>
            <h3 className="trust-title">Schweizer Diskretion</h3>
            <p className="trust-desc">
              Unabhängigkeit und absolute Vertraulichkeit sind unser höchstes Gut. Ihre Daten bleiben in der Schweiz.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};