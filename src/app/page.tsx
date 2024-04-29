import Link from 'next/link'
import Sponsors from '@/component/Sponsors/Sponsors'

import styles from './HomePage.module.scss'
import NewsList from '@/component/NewsList/NewsList'

export default function Home() {
  return (
    <>
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
        <NewsList limit={10} />
      </div>
      <div className={styles.sponsors}>
        <Sponsors />
      </div>
    </>
  )
}

