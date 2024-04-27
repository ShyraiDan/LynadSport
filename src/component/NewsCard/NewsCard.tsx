import styles from './NewsCard.module.scss'
import Image from 'next/image'
import { INews } from '@/models/news'
import Link from 'next/link'

import { FaArrowRight } from 'react-icons/fa'

export default function NewsCard({ data }: { data: INews }) {
  return (
    <div className={styles.card}>
      <Image src={data.imagePath} height='100' width='400' alt='GFG logo served from external URL' />
      <div>
        <div>
          <p>
            {data.updatedAt.substring(0, 10)} {data.updatedAt.substring(11, 19)}
          </p>
          <h4>{data.title}</h4>
        </div>
        <Link href='/news'>
          Read More
          <FaArrowRight size={12} />
        </Link>
      </div>
    </div>
  )
}
