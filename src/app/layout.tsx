import './globals.css'
import type { Metadata } from 'next'
import { Hanken_Grotesk } from 'next/font/google'

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${hanken.variable}`}>
      <body>{children}</body>
    </html>
  )
}
