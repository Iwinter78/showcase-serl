import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/navbar'

export const metadata: Metadata = {
  title: 'ShowCaseSERL',
  description: 'A showcase of student projects at Blekinge Institute of Technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
      <div className="flex flex-col h-screen justify-between">
        <Navbar />
        <main className="mb-auto h-10">
          {children}
        </main>
        <footer className="h-10">
          <p className="text-center">© {new Date().getFullYear()} ShowCaseSERL</p>
        </footer>
      </div>
      </body>
    </html>
  )
}
