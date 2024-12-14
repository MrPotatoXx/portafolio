import { ReactNode } from 'react'
import { Metadata } from 'next'
import { Source_Code_Pro } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
})

interface RootLayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'Giovanni Salinas - Portafolio',
  description: "Portafolio desarrollado en el framework Next.js de Giovanni Salinas, Ingeniero en Informática.",
  keywords: "Giovanni Salinas, Ingeniería en Informática, Ciberseguridad, Desarrollo Web, Programación, Python, Ethical Hacker",
  authors: [{ name: "Giovanni Salinas" }],
  openGraph: {
    title: 'Giovanni Salinas - Portafolio',
    description: "Portafolio desarrollado en el framework Next.js de Giovanni Salinas, Ingeniero en Informática.",
    url: '',
    siteName: 'potatox',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Giovanni Salinas - Portafolio',
    description: "Portafolio desarrollado en el framework Next.js de Giovanni Salinas, Ingeniero en Informática.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" className={sourceCodePro.className}>
      <body className="flex flex-col min-h-screen bg-neutral-900 px-10">
        <main className="flex-grow flex justify-center">
          {children}
        </main>
        <GoogleAnalytics gaId="G-3K6PX2FWFD" />
      </body>
    </html>
  )
}