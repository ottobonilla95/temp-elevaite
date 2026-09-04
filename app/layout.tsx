import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Temp Elevaite',
  description: 'A few thoughts for a slower day.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
