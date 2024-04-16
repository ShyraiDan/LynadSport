import styles from './NewsCard.module.scss'
import Image from 'next/image'

import { FaArrowRight } from 'react-icons/fa'

import hero from '@/i/1.webp'
import Link from 'next/link'

export default function NewsCard() {
  return (
    <div className={styles.card}>
      <Image src={hero} alt='' />
      <div>
        <div>
          <p>7 Hour(s) ago</p>
          <h4>Mucker plastered bugger</h4>
        </div>
        <Link href='/news'>
          Read More
          <FaArrowRight size={12} />
        </Link>
      </div>
    </div>
  )
}
