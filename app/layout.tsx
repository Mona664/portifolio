import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/globals.css"
const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  adjustFontFallback: true,
  variable: '--font-inter' // إضافة متغير للخط
})

export const metadata: Metadata = {
  title: "Mona Soliman - Back-end Developer Portfolio",
  description: "Professional portfolio of Mona Soliman, a results-driven Back-end Developer",
  keywords: ["Back-end Developer", "Node.js", "Laravel", "ASP.NET", "MongoDB"],
  authors: [{ name: "Mona Soliman" }],
  openGraph: {
    title: "Mona Soliman - Back-end Developer Portfolio",
    description: "Professional portfolio showcasing 2+ years of back-end development experience",
    type: "website",
  },
  metadataBase: new URL('https://mona-soliman.vercel.app'), // إضافة URL الأساسي
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} antialiased bg-slate-50 text-gray-900 overflow-x-hidden`}>
        <div className="min-h-screen flex flex-col mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </body>
    </html>
  )
}
