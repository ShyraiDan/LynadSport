import styles from './Header.module.scss'
import NavLink from '../UI/NavLink/NavLink'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['header-container']}>
        <div className={styles['header-left']}>
          <div></div>
          <NavLink href={'/'}>
            Lynad<span>Sport</span>
          </NavLink>
          <nav>
            <ul className={styles['nav-list']}>
              <li className={styles['nav-item']}>
                <NavLink href='/about-us'>About us</NavLink>
              </li>
              <li className={styles['nav-item']}>
                <NavLink href='/gallery'>Gallery</NavLink>
              </li>
              <li className={styles['nav-item']}>
                <NavLink href={'/news'}>News</NavLink>
              </li>
              <li className={styles['nav-item']}>
                <NavLink href={'/contact-us'}>Contact Us</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles['header-right']}>
          {/* {isAuth ? <UserModal /> : <AuthModal />}
        <Burger /> */}
        </div>
      </div>
    </header>
  )
}
