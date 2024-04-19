import styles from './Input.module.scss'
import { HTMLInputTypeAttribute, ReactNode } from 'react'
interface IInput {
  type: HTMLInputTypeAttribute | undefined
  placeholder: string
  name: string
  id: string
  required?: boolean
  children?: ReactNode
  obj?: Object
}

export function Input({ type, placeholder, name, id, children, required, obj }: IInput) {
  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {children}
      </label>
      <input
        required={required}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        {...obj}
      />
    </>
  )
}
