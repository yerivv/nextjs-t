import Link from 'next/link'
import styles from '../assets/styles/page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>메인 페이지</h2>
      <h3><strong>폰트는 구글폰트로</strong></h3>
      <Link href='/about/'>About</Link>
    </main>
  )
}
