import { FC } from 'react';

const logos = [
  {
    name: "Zürcher Kantonalbank",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/60/Z%C3%BCrcher_Kantonalbank_logo.svg"
  },
  {
    name: "Bank Avera",
    src: "https://bank-avera.ch/application/files/4716/0146/6057/BankAvera_wir_verstehen_uns.svg"
  },
  {
    name: "Schweizerische Nationalbank",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/SNB-Logo-positiv-blau.svg/2560px-SNB-Logo-positiv-blau.svg.png"
  },
  {
    name: "Die Mobiliar",
    src: "https://www.mobiliar.ch/logos/mobiliar-de.svg"
  },
  {
    name: "SBB CFF FFS",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/70/SBB_CFF_FFS_logo.svg"
  },
  {
    name: "Manor",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Logo_Manor.svg"
  }
];

// Duplicate the array to ensure seamless infinite scrolling
const sliderLogos = [...logos, ...logos];

export const LogoBar: FC = () => {
  return (
    <section id="logos" className="logo-bar-section">
      <div className="container logo-bar-title">
        <p className="logo-bar-text">
          Vertrauen durch Präzision bei führenden Schweizer Unternehmen
        </p>
      </div>

      <div className="logo-scroll-container">
        {/* Gradient Overlays */}
        <div className="logo-scroll-mask-left"></div>
        <div className="logo-scroll-mask-right"></div>

        <div className="logo-track">
          {sliderLogos.map((logo, index) => (
            <div 
              key={`${logo.name}-${index}`} 
              className="logo-item"
            >
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="logo-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};