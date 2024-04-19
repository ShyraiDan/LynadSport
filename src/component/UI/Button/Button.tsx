import styles from './Button.module.scss'
import { ReactNode } from 'react'

interface IButton {
  children?: ReactNode
  type?: 'button' | 'submit' | 'reset'
  outline?: boolean
  onClick?: () => void
  disabled?: boolean
}

export function Button({ children, onClick, type, outline, disabled }: IButton) {
  return (
    <>
      <button
        type={type}
        disabled={disabled}
        className={`${styles.button} ${outline && styles.outline}`}
        onClick={onClick}>
        {children}
      </button>
    </>
  )
}
