'use client'

import styles from './Sponsors.module.scss'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

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

const arr = [intel, predator, dhl, monster, whiteMarket, adidas, cola, visa]

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
              576: {
                slidesPerView: 3
              },
              700: {
                slidesPerView: 4
              },
              768: {
                slidesPerView: 2
              },
              840: {
                slidesPerView: 3
              },
              992: {
                slidesPerView: 4
              },
              1150: {
                slidesPerView: 5
              },
              1300: {
                slidesPerView: 6
              },
              1450: {
                slidesPerView: 7
              },
              1600: {
                slidesPerView: 8
              }
            }}
            slidesPerView={1}
            modules={[Navigation, Pagination]}>
            {arr.map((item) => {
              return (
                <SwiperSlide>
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
