
import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LogoBar } from './components/LogoBar';
import { Benefits } from './components/Benefits';
import { Comparison } from './components/Comparison';
import { DeepDive } from './components/DeepDive';
import { Expert } from './components/Expert';
import { Trust } from './components/Trust';
import { Footer } from './components/Footer';
import { WhitepaperModal } from './components/WhitepaperModal';
import { HelpCircle } from 'lucide-react';

const FAQSection = () => (
  <section className="faq-section" style={{ padding: '6rem 0', backgroundColor: 'var(--white)' }}>
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">Häufige Fragen von Entscheidungsträgern</h2>
        <p className="section-subtitle">Methodik, Sicherheit und ROI im Detail.</p>
      </div>
      <div className="faq-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr', 
        gap: '2rem', 
        maxWidth: '800px', 
        margin: '0 auto' 
      }}>
        {[
          { q: "Wie sicher ist die Prognosekraft Ihrer Verfahren?", a: "Wir erreichen eine prognostische Validität von bis zu 0.65 (GCA-Verfahren), was weit über herkömmlichen Interviews (ca. 0.2) liegt. Das Risiko für Fehlentscheidungen sinkt signifikant." },
          { q: "Entspricht die Diagnostik den Compliance-Richtlinien?", a: "Ja, alle Verfahren sind nach DIN 33430 standardisiert und erfüllen höchste Datenschutz-Anforderungen (DSGVO/CH-DSG)." },
          { q: "Ist das Assessment auch für Executive-Level geeignet?", a: "Absolut. Gerade bei C-Level-Positionen sind die Hebelwirkungen und Risiken am grössten. Unsere Management-Diagnostik ist spezifisch auf strategische Kompetenzen ausgelegt." },
          { q: "Wie hoch ist der zeitliche Aufwand pro Kandidat?", a: "In der Online-Version IPE ca. 45–60 Minuten. Die Auswertung liegt Ihnen unmittelbar danach digital vor." },
          { q: "Wann amortisieren sich die Kosten?", a: "In der Regel reicht die Vermeidung einer einzigen Fehlbesetzung aus, um die Diagnostikkosten für ein ganzes Jahr zu amortisieren." },
          { q: "Bieten Sie auch Begleitung beim Onboarding an?", a: "Ja, jeder Report enthält konkrete Hinweise für die Einarbeitungsphase, um die Time-to-Productivity zu verkürzen." }
        ].map((item, i) => (
          <div key={i} className="faq-item" style={{ borderBottom: '1px solid var(--gray-200)', paddingBottom: '1.5rem' }}>
            <h4 style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.5rem', color: 'var(--slate-900)' }}>
              <HelpCircle size={20} color="var(--blue-600)" style={{ flexShrink: 0 }} />
              {item.q}
            </h4>
            <p style={{ color: 'var(--slate-600)', fontSize: '0.95rem', paddingLeft: '2.25rem' }}>{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

function App() {
  const [isWhitepaperModalOpen, setIsWhitepaperModalOpen] = useState(false);

  const openWhitepaperModal = () => setIsWhitepaperModalOpen(true);
  const closeWhitepaperModal = () => setIsWhitepaperModalOpen(false);

  return (
    <div className="app-wrapper">
      <Header onOpenWhitepaper={openWhitepaperModal} />
      
      <main>
        <Hero onOpenWhitepaper={openWhitepaperModal} />
        <LogoBar />
        <Benefits />
        <Comparison onOpenWhitepaper={openWhitepaperModal} />
        <div id="trust"><Trust /></div>
        <DeepDive />
        <Expert />
        <FAQSection />
      </main>

      <Footer />

      <WhitepaperModal 
        isOpen={isWhitepaperModalOpen} 
        onClose={closeWhitepaperModal} 
      />
    </div>
  );
}

export default App;
