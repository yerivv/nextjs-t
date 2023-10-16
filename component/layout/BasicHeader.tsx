'use client'
import '@/public/styles/layout/header.scss'
import Link from 'next/link'
import BasicMenu from './BasicMenu'
import { usePathname } from "next/navigation";

//https://lee-yo-han.github.io/nextjs-react-responsive

export default function BasicHeader() {
  const pathname = usePathname();
  return (
    <>
    <header className={pathname == '/' ? 'type-1' : ''}>
      <h1>
        <Link href="/" className="logo">로고</Link>
      </h1>
      {pathname == '/' && <div>개인화 영역</div>}
      <div>검색/환율/언어</div>
      <div>메인 메뉴</div>
      <div>항공편검색</div>
      <h2>페이지명</h2>
    </header>
    <BasicMenu />
    </>
  )
}