'use client'

import styles from './NewsList.module.scss'
import NewsCard from '../NewsCard/NewsCard'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { INews } from '@/models/news'

export default function NewsList({ limit }: { limit?: number }) {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/news?${limit && `limit=${limit}`}`)

        setData(response.data.news)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])
  return (
    <div className={styles['news-group']}>
      {data.map((item: INews) => (
        <NewsCard data={item} key={item._id} />
      ))}
    </div>
  )
}
