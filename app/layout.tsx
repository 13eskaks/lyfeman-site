import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lyfeman Projects',
  description: 'Explora los proyectos de Lyfeman',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-900 text-white font-sans">{children}</body>
    </html>
  );
}