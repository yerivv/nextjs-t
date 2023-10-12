import Link from 'next/link'
import styles from '@/public/styles/page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>메인 페이지</h2>
      <Link href='/about/'>About</Link>
    </main>
  )
}
