import Header from '@/component/Header/Header'
import Link from 'next/link'
import NewsCard from '@/component/NewsCard/NewsCard'

import hero from '@/i/1.webp'

import styles from './HomePage.module.scss'

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.top}>
          <div>
            <div>
              <h1>
                Best way to
                <br /> Browse sport news
              </h1>
              <p>Push your limits. Own your victory.</p>
              <Link href={'/news'}>Browse News</Link>
            </div>
          </div>
        </div>
        <div className={styles['top-news']}>
          <h2>Latest news</h2>

          <div>
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </div>

        <div className={styles.sponsors}></div>
      </div>
    </>
  )
}

