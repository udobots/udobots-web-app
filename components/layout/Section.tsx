import { ReactNode } from 'react';

type SectionBg = 'white' | 'gray' | 'dark' | 'primary';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: SectionBg;
}

const bgMap: Record<SectionBg, string> = {
  white: 'bg-white',
  gray: 'bg-lightgray',
  dark: 'bg-charcoal text-white',
  primary: 'bg-primary-500 text-white',
};

export default function Section({ children, className = '', id, bg = 'white' }: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${bgMap[bg]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
