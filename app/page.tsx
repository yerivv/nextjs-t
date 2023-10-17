import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h2>메인 페이지</h2>
      <button>이동</button>
      <Link href='/about/'>About</Link>
    </>
  )
}
