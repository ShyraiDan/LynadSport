import styles from './NewsPage.module.scss'
import NewsCard from '@/component/NewsCard/NewsCard'

export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h2>News</h2>
      </div>
      <div className={styles['news-group']}>
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
  )
}
