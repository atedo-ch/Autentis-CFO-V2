import { FC } from 'react';

interface LogoProps {
  className?: string;
  withSubtitle?: boolean;
}

export const Logo: FC<LogoProps> = ({ className = '', withSubtitle = true }) => {
  // Using the official logo asset provided by the user
  const logoUrl = "https://raw.githubusercontent.com/atedo-ch/autentis-brandassets/refs/heads/main/autentis_logo-DEF.svg";

  return (
    <div className={`logo-container ${className}`} style={{ display: 'inline-flex', flexDirection: 'column' }}>
      <img 
        src={logoUrl} 
        alt="Autentis Logo" 
        style={{ height: '100%', width: 'auto', display: 'block' }}
      />
      {/* 
        Note: If the official SVG already contains the subtitle, 
        we don't need to render extra text. 
        Most brand-DEF SVGs include the full lockup.
      */}
    </div>
  );
};