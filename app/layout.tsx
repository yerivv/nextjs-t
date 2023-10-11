//import './globals.css'
import type { Metadata } from 'next'
import { Gowun_Batang } from 'next/font/google'
//import { Inter } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'] })
const gowunBatang = Gowun_Batang({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'next.js Study',
  description: 'study',
  icons: {
   // icon: 'setting-list.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={gowunBatang.className}>
        <h1>h1타이틀</h1>
        {children}
        <h6>h6타이틀</h6>
      </body>
    </html>
  )
}
