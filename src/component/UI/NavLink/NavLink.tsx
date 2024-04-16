import Link from 'next/link'
import styles from './NavLink.module.scss'

interface INavLink {
  href: string
  children: React.ReactNode
}

export default function NavLink({ href, children }: INavLink) {
  return (
    <Link className={styles.link} href={href}>
      {children}
    </Link>
  )
}
