import styles from './Gallery.module.scss'
import Image from 'next/image'

import photoOne from '@/i/news/1.webp'
import photoTwo from '@/i/news/2.webp'
import photoThree from '@/i/news/3.webp'
import photoFour from '@/i/news/4.webp'
import photoFive from '@/i/news/5.avif'
import photoSix from '@/i/news/6.avif'
import photoSeven from '@/i/news/7.webp'
import photoEight from '@/i/news/8.webp'
import photoNine from '@/i/news/9.webp'
import photoTen from '@/i/news/10.webp'
import photoEleven from '@/i/news/11.webp'
import photoTwelve from '@/i/news/12.webp'
import photoThirteen from '@/i/news/13.webp'
import photoFourteen from '@/i/news/14.webp'
import photoFifteen from '@/i/news/15.webp'
import photoSixteen from '@/i/news/16.webp'
import photoSeventeen from '@/i/news/17.webp'
import photoEighteen from '@/i/news/18.avif'
import photoNineteen from '@/i/news/19.avif'
import photoTwenty from '@/i/news/20.avif'

export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h2>Gallery</h2>
      </div>
      <div className={styles['grid-wrapper']}>
        <div className={styles.wide}>
          <Image src={photoOne} alt='' />
        </div>
        <div className={styles.tall}>
          <Image src={photoTwo} alt='' />
        </div>
        <div className={styles.wide}>
          <Image src={photoThree} alt='' />
        </div>
        <div>
          <Image src={photoFour} alt='' />
        </div>
        <div>
          <Image src={photoFive} alt='' />
        </div>
        <div>
          <Image src={photoSix} alt='' />
        </div>
        <div className={styles.tall}>
          <Image src={photoSeven} alt='' />
        </div>
        <div className={styles.wide}>
          <Image src={photoEight} alt='' />
        </div>
        <div className={styles.tall}>
          <Image src={photoNine} alt='' />
        </div>
        <div>
          <Image src={photoTen} alt='' />
        </div>
        <div>
          <Image src={photoEleven} alt='' />
        </div>
        <div className={styles.wide}>
          <Image src={photoTwelve} alt='' />
        </div>
        <div>
          <Image src={photoThirteen} alt='' />
        </div>
        <div>
          <Image src={photoFourteen} alt='' />
        </div>
        <div className={styles.tall}>
          <Image src={photoFifteen} alt='' />
        </div>
        <div className={styles.wide}>
          <Image src={photoSixteen} alt='' />
        </div>
        <div className={styles.tall}>
          <Image src={photoSeventeen} alt='' />
        </div>
        <div>
          <Image src={photoEighteen} alt='' />
        </div>
        <div>
          <Image src={photoNineteen} alt='' />
        </div>
        <div>
          <Image src={photoTwenty} alt='' />
        </div>
      </div>
    </div>
  )
}
