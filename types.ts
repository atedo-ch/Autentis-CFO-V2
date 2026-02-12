import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface BenefitProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export interface ComparisonItemProps {
  text: string;
  type: 'risk' | 'benefit';
}
