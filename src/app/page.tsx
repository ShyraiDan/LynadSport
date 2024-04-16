import Header from '@/component/Header/Header'
import Link from 'next/link'
import NewsCard from '@/component/NewsCard/NewsCard'
import Sponsors from '@/component/Sponsors/Sponsors'

import styles from './HomePage.module.scss'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Header />
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

        <div className={styles.sponsors}>
          <Sponsors />
        </div>
      </div>
    </>
  )
}

