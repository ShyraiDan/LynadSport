import Link from 'next/link'
import styles from './NavLink.module.scss'

interface INavLink {
  href: string
  children: React.ReactNode
  onClick?: () => void
}

export default function NavLink({ href, children, onClick }: INavLink) {
  return (
    <Link className={styles.link} href={href} onClick={onClick}>
      {children}
    </Link>
  )
}
