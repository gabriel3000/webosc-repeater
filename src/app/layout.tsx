import './globals.css'
import type { Metadata } from 'next'
import { Cabin } from 'next/font/google'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gabrieljablanczy.com'),
  title: 'Gabriel Jablanczy | Fontend Web Developer',
  description: 'Proficient in many technologies from TypeScript to CSS. Site-Speed Optimization and Privacy Compliance expert.',
  openGraph: {
    images: ['/portfolio-site-og-image-meta.png'],
  },
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
