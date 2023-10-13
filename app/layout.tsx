import '@/public/styles/globals.scss'
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
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={gowunBatang.className}>
        <div className="skip-navigation">
          <a href="#contents">본문 바로가기</a>
        </div>
        <div id="wrap">
          <BasicHeader />
          <main className="container">
            <div id="contents" className="contents">{children}</div>
          </main>
          <BasicFooter />
        </div>
      </body>
    </html>
  )
}
