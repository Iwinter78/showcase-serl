import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/navbar'

export const metadata: Metadata = {
  title: 'ShowCaseSERL',
  description:
    'A showcase of student projects at Blekinge Institute of Technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <div className='flex h-screen flex-col justify-between'>
          <header className='h-10'>
            <Navbar />
          </header>
          <main className='h-30 mb-auto'>{children}</main>
          <footer className='h-10'>
            <p className='text-center'>
              &copy; {new Date().getFullYear()} ShowCaseSERL
            </p>
          </footer>
        </div>
      </body>
    </html>
  )
}
