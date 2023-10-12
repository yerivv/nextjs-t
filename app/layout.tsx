//import './globals.css'
import { Gowun_Batang } from 'next/font/google'
import BasicHeader from '@/component/layout/BasicHeader'
import BasicFooter from '@/component/layout/BasicFooter'

const gowunBatang = Gowun_Batang({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata = {
  title: {
    default: "김김",
    template: "",
  },
  description: "그냥 나 혼자 하는 거",
  icons: {
    icon: "@/public/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={gowunBatang.className}>
        <BasicHeader />
        <main>{children}</main>
        <BasicFooter />
      </body>
    </html>
  )
}
