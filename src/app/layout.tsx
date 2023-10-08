import Wrapper from '@/components/shared/wrapperTwo'
import Footers from '@/components/view/Footers'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/view/Navabar'
import HomePage from '@/components/view/HeroSection'
import Head from 'next/head'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Landing Page',
  description: 'Landing Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
      <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com"  />
        <Link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body className={inter.className}>
        <NavBar />
        <HomePage />
        <Wrapper>
          {children}
        </Wrapper>
        <Footers />
      </body>
    </html>
  )
}
