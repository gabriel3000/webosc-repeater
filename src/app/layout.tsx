import './globals.css'
import type { Metadata } from 'next'
import { Cabin } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Gabriel Jablanczy',
  description: 'Gabriel Jablanczy\'s personal website',
}

const cabinFont = Cabin({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cabinFont.className}>{children}</body>
    </html>
  )
}
