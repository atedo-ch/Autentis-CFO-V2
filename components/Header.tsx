
import { useState, useEffect, FC } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { Button } from './Button';
import { Logo } from './Logo';

interface HeaderProps {
  onOpenWhitepaper: () => void;
}

export const Header: FC<HeaderProps> = ({ onOpenWhitepaper }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhitepaperClick = () => {
    onOpenWhitepaper();
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo-wrapper">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <Logo className="main-logo" />
            </a>
          </div>

          <nav className="nav-desktop">
            {/* Navigation links removed as per request */}
            <Button onClick={handleWhitepaperClick} size="sm" variant="primary">
              <FileText size={16} style={{ marginRight: '0.5rem' }} />
              Whitepaper: ROI sichern
            </Button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="menu-toggle"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {/* Mobile navigation links removed */}
          <Button onClick={handleWhitepaperClick} fullWidth variant="primary">
            Whitepaper anfordern
          </Button>
        </div>
      )}
    </header>
  );
};
