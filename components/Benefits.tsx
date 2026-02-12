import { FC } from 'react';
import { BadgeSwissFranc, ShieldAlert, Zap, TrendingDown } from 'lucide-react';
import { BenefitProps } from '../types';

const benefits: BenefitProps[] = [
  {
    title: "ROI & Payback",
    description: "Jeder investierte Franken liefert messbaren Mehrwert. Die Diagnosekosten amortisieren sich typischerweise innerhalb der ersten 6 Monate.",
    Icon: BadgeSwissFranc
  },
  {
    title: "Risikominimierung",
    description: "Vermeiden Sie kostspielige Fehlbesetzungen (30-130k CHF) und Reputationsschäden durch datengestützte Objektivität.",
    Icon: ShieldAlert
  },
  {
    title: "Time-to-Productivity",
    description: "Passgenaue Kandidaten sind schneller leistungsfähig. Wir identifizieren High-Performer, die ab Tag 1 liefern.",
    Icon: Zap
  },
  {
    title: "Senkung der HR-Kosten",
    description: "Reduzieren Sie Fluktuation und Wiederbesetzungskosten nachhaltig durch präzise Passung von Skills und Kultur.",
    Icon: TrendingDown
  }
];

export const Benefits: FC = () => {
  return (
    <section className="benefits-section" id="vorteile">
      <div className="container">
        <div className="benefits-grid">
          {benefits.map((item, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon-wrapper">
                <item.Icon size={24} />
              </div>
              <h3 className="benefit-title">{item.title}</h3>
              <p className="benefit-desc">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};