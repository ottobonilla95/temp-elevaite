import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Temp Elevaite',
  description: 'A few thoughts for a slower day.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="https://elevaite-stage.iopex.ai/embed.js"
          data-key="pk_live_default.PyEfCy91te0V28Tl-L54D1wtb7RvQMCC"
          referrerPolicy="no-referrer"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
