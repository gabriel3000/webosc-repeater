import './globals.css'
import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Gabriel Jablanczy',
  description: 'Gabriel Jablanczy\'s personal website',
}

const spaceMonoFont = Space_Mono({
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
      <body className={spaceMonoFont.className}>{children}</body>
    </html>
  )
}
