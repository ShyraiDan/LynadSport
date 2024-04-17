'use client'

import styles from './Sponsors.module.scss'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import intel from '@/i/intel.svg'
import predator from '@/i/predator.svg'
import dhl from '@/i/DHL_rgb.avif'
import monster from '@/i/logo-monster-energy-horizontal.avif'
import whiteMarket from '@/i/official-partner-white-market.avif'
import adidas from '@/i/adidas.png'
import cola from '@/i/coca.png'
import visa from '@/i/visa.png'

const arr = [
  intel,
  predator,
  dhl,
  monster,
  whiteMarket,
  adidas,
  cola,
  visa,
  intel,
  predator,
  dhl,
  monster,
  whiteMarket,
  adidas,
  cola,
  visa
]

export default function Sponsors() {
  return (
    <>
      <div className={styles.container}>
        <h2>Our Sponsors</h2>
        <div className={styles['item-container']}>
          <Swiper
            pagination
            centeredSlides={true}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            breakpoints={{
              320: {
                slidesPerView: 2
              },
              400: {
                slidesPerView: 3
              },
              510: {
                slidesPerView: 4
              },
              620: {
                slidesPerView: 5
              },
              730: {
                slidesPerView: 6
              },
              840: {
                slidesPerView: 7
              },
              950: {
                slidesPerView: 8
              }
            }}
            slidesPerView={1}
            modules={[Autoplay, Pagination, Navigation]}>
            {arr.map((item, i) => {
              return (
                <SwiperSlide key={'item-' + i}>
                  <div className={styles.sponsor}>
                    <Image src={item} alt='logo' />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </>
  )
}
