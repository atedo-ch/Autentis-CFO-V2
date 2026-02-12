
import { useState, useMemo, FC } from 'react';
import { Button } from './Button';
import { Info } from 'lucide-react';

export const ROICalculator: FC = () => {
  const [salary, setSalary] = useState(150000);
  const [duration, setDuration] = useState(6);
  const [hasInteracted, setHasInteracted] = useState(false);

  const costs = useMemo(() => {
    const monthlySalary = salary / 12;
    const salaryCost = monthlySalary * duration * 1.25; 
    const hiringCost = salary * 0.20; 
    const damageCost = salary * 0.50; 
    const totalCost = salaryCost + hiringCost + damageCost;
    const maxCost = Math.max(salaryCost, hiringCost, damageCost);

    return { salaryCost, hiringCost, damageCost, totalCost, maxCost };
  }, [salary, duration]);

  const formatCHF = (amount: number) => {
    return 'CHF ' + Math.round(amount).toLocaleString('de-CH').replace(/,/g, "'");
  };

  const handleAction = () => {
    if (hasInteracted) {
      window.open('https://app.lemcal.com/@bernhard-kurth/30-minutes', '_blank');
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInteraction = (val: number, setter: (v: number) => void) => {
    setter(val);
    setHasInteracted(true);
  };

  return (
    <div className="calculator-container">
      <h2 style={{ color: '#1e3a5f', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', textAlign: 'center' }}>
        Kostenrisiko-Check
      </h2>
      <p className="subtitle">Identifizieren Sie das finanzielle Risiko einer Fehlbesetzung.</p>
      
      <div className="input-group">
          <label htmlFor="salary">Jahresbruttogehalt (Position)</label>
          <div className="input-wrapper">
              <span className="currency-prefix">CHF</span>
              <input 
                type="number" 
                id="salary" 
                value={salary} 
                onChange={(e) => handleInteraction(Number(e.target.value), setSalary)}
                step={5000} 
                min={50000} 
              />
          </div>
      </div>
      
      <div className="input-group">
          <label htmlFor="duration">Dauer der Fehlbesetzung (Monate)</label>
          <div className="slider-container">
              <div className="slider-value">
                  <span>Zeitraum</span>
                  <span>{duration} Mte.</span>
              </div>
              <input 
                type="range" 
                id="duration" 
                min="1" 
                max="12" 
                value={duration}
                onChange={(e) => handleInteraction(Number(e.target.value), setDuration)}
              />
          </div>
      </div>
      
      <div className="result-section">
          <div className="total-cost">
              <div className="total-label">Gefährdetes Budget</div>
              <div className="total-amount">{formatCHF(costs.totalCost)}</div>
          </div>
          
          {hasInteracted && (
            <div className="interpretation-panel" style={{ 
              background: '#eff6ff', 
              padding: '1rem', 
              borderRadius: '0.5rem', 
              marginBottom: '1.5rem',
              border: '1px solid #dbeafe',
              animation: 'fadeIn 0.3s ease-out'
            }}>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <Info size={18} color="#1d4ed8" style={{ flexShrink: 0 }} />
                <p style={{ fontSize: '0.85rem', color: '#1e3a8a', lineHeight: 1.4 }}>
                  <strong>Einordnung:</strong> Dieses Risiko entspricht ca. <strong>{(costs.totalCost / salary * 100).toFixed(0)}%</strong> des Bruttojahresgehalts. Ein wissenschaftliches Assessment reduziert dieses Risiko um bis zu 95%.
                </p>
              </div>
            </div>
          )}

          <div className="breakdown">
              <div className="cost-item">
                  <div className="cost-label">Gehalt & Nebenleistung</div>
                  <div className="cost-value">{formatCHF(costs.salaryCost)}</div>
              </div>
              <div className="cost-item">
                  <div className="cost-label">Opportunität & Schaden</div>
                  <div className="cost-value">{formatCHF(costs.damageCost + costs.hiringCost)}</div>
              </div>
          </div>
      </div>
      
      <Button 
        onClick={handleAction} 
        fullWidth 
        variant={hasInteracted ? 'primary' : 'outline'} 
        className="mt-4"
      >
        {hasInteracted ? 'Ergebnis kurz einordnen (15 Min. Call)' : 'Analyse anfordern'}
      </Button>
      
      <p className="disclaimer">
        Modellrechnung basierend auf Schweizer Marktdurchschnittswerten.
      </p>
    </div>
  );
};
