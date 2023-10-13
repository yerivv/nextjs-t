import Link from 'next/link'
import '@/public/styles/layout/header.scss'

export default function BasicHeader() {
  return (
    <header>
      <h1>
        <Link href="/">로고</Link>
      </h1>
    </header>
  )
}