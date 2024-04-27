import styles from './NewsPage.module.scss'
import NewsList from '@/component/NewsList/NewsList'

export default function page() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.top}>
          <h2>News</h2>
        </div>
        <NewsList />
      </div>
    </div>
  )
}
