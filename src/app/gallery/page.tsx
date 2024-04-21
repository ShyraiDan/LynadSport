import styles from './Gallery.module.scss'
import Image from 'next/image'

import bg from '@/i/1.webp'

const images = [bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg]

export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles['grid-wrapper']}>
        <div className={styles.wide}>
          <Image src={bg} alt='' />
        </div>
        <div className={styles.tall}>
          <Image src={bg} alt='' />
        </div>
        <div>
          <Image src={bg} alt='' />
        </div>
        <div className={styles.wide}>
          <Image src={bg} alt='' />
        </div>
        <div>
          <Image src={bg} alt='' />
        </div>
        <div>
          <Image src={bg} alt='' />
        </div>
        <div className={styles.tall}>
          <Image src={bg} alt='' />
        </div>
        <div className={styles.wide}>
          <Image src={bg} alt='' />
        </div>
        <div className={styles.tall}>
          <Image src={bg} alt='' />
        </div>
        <div>
          <Image src={bg} alt='' />
        </div>
        <div>
          <Image src={bg} alt='' />
        </div>
        <div className={styles.wide}>
          <Image src={bg} alt='' />
        </div>
        <div>
          <Image src={bg} alt='' />
        </div>
        <div>
          <Image src={bg} alt='' />
        </div>
        <div className={styles.tall}>
          <Image src={bg} alt='' />
        </div>
        <div className={styles.wide}>
          <Image src={bg} alt='' />
        </div>
        <div className={styles.tall}>
          <Image src={bg} alt='' />
        </div>
        <div>
          <Image src={bg} alt='' />
        </div>
        <div>
          <Image src={bg} alt='' />
        </div>
        <div>
          <Image src={bg} alt='' />
        </div>
      </div>
    </div>
  )
}
