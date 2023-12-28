import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Front-end developer Chornyi Vlad',
  description: 'Projects portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body >
        <header>
          <ul>
            <li>
            <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/saia">SAIA</Link>
            </li>
          </ul>
        </header>
        <main>{children}</main>
        <footer>created by Chornyi Vlad</footer></body>
    </html>
  )
}
