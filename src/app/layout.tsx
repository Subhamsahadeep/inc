import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/header'


export const metadata: Metadata = {
  title: 'Indian National Congress',
  description: 'Indian National Congress',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-poppins">
        <div className="h-20 p-0 m-0">
          <Header></Header>
        </div>
        <div className="h-[calc(100vh-80px)] p-0 m-0">
          {children}
        </div>
      </body>
    </html>
  )
}
