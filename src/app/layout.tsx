import "./globals.css";
import type { Metadata } from "next";
import { Dancing_Script, Inter } from 'next/font/google';

// Fuente handwriting para títulos
const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dancing',
  display: 'swap'
});

// Fuente limpia para textos (similar a Freddie Braun)
const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Brik | Dev / Creative Engineer",
  description: "Portafolio de Brikman Morales, ingeniero de software y creador digital.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${dancingScript.variable} ${inter.variable}`}>
      <body className="relative min-h-screen text-white bg-black overflow-x-hidden">
        {/* Ruido TV solo en el fondo */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            backgroundImage: 'url(/static.gif)',
            backgroundSize: 'auto',
            backgroundRepeat: 'repeat',
            opacity: 0.05,
            zIndex: 0,
            pointerEvents: 'none'
          }}
        />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}