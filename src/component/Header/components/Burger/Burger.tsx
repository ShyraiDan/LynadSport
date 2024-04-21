'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './Burger.module.scss'
import NavLink from '@/component/UI/NavLink/NavLink'
import { removeScrollBar } from '@/constants/shared'

import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa'
import { RxCross1 } from 'react-icons/rx'

export default function Burger() {
  const [isBurgerShow, setBurgerShow] = useState(false)

  const showModal = () => {
    setBurgerShow((state) => !state)
    removeScrollBar(isBurgerShow)
  }

  return (
    <>
      <div onClick={() => showModal()} className={styles['burger-btn']}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`${isBurgerShow && styles.layout}`} />
      <div className={`${styles.burger} ${isBurgerShow && styles.active}`}>
        <div className={styles.top}>
          <div>
            <h2>
              <NavLink href='/'>
                Lynad<span>Sport</span>
              </NavLink>
            </h2>
            <RxCross1 onClick={() => showModal()} size={'24px'} />
          </div>
          <ul>
            <li>
              <NavLink href='/about-us' onClick={() => showModal()}>
                About us
              </NavLink>
            </li>
            <li>
              <NavLink href='/gallery' onClick={() => showModal()}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink href='/news' onClick={() => showModal()}>
                News
              </NavLink>
            </li>
            <li>
              <NavLink href='/contact-us' onClick={() => showModal()}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        <div className={styles.bottom}>
          <div className={styles.social}>
            <p>Follow us</p>
            <ul>
              <li>
                <Link href={'https://www.instagram.com/'}>
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link href={'https://twitter.com/'}>
                  <FaXTwitter />
                </Link>
              </li>
              <li>
                <Link href={'https://www.facebook.com/'}>
                  <FaFacebook />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
