import styles from './page.module.css'

// import Link from 'next/link'

//Home Page
export default function MyHome() {
  return <main className={styles.main}>
    <div className={styles.description}>
      {/* <nav>
        <Link href="/greetings">Greetings</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/review">Review</Link>
      </nav> */}
       <h1>About</h1>
    </div>
  </main>
}
