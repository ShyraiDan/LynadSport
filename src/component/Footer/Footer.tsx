import styles from './Footer.module.scss'
import Link from 'next/link'

import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-container']}>
        <div className={styles['footer-main']}>
          <Link href={'/'}>
            Lynad<span>Sport</span>
          </Link>
          <div className={styles['footer-center']}>
            <div className={styles['footer-left']}>
              <nav>
                <ul className={styles['nav-list']}>
                  <li className={styles['nav-item']}>
                    <Link href='/about-us'>About Us</Link>
                  </li>
                  <li className={styles['nav-item']}>
                    <Link href='/gallery'>Gallery</Link>
                  </li>
                  <li className={styles['nav-item']}>
                    <Link href={'/news'}>News</Link>
                  </li>
                  <li className={styles['nav-item']}>
                    <Link href={'/contact-us'}>Contact us</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={styles['footer-right']}>
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
        <div className={styles['footer-bottom']}>
          © Copyright {new Date().getFullYear()}.{' '}
          <Link replace={true} href={'/'}>
            LynadLearn
          </Link>
        </div>
      </div>
    </footer>
  )
}
