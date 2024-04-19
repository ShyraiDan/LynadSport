'use client'

import styles from './ContactUs.module.scss'
import { Button } from '@/component/UI/Button/Button'
import { Input } from '@/component/UI/Input/Input'
import { useForm, SubmitHandler } from 'react-hook-form'

interface IContactUS {
  userName: string
  email: string
  subject: string
  message: string
}

export default function ContactUsPage() {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<IContactUS>({
    mode: 'onBlur'
  })

  const onSubmit: SubmitHandler<IContactUS> = async (values) => {
    console.log(values)
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>Contact Us</h1>
        <p>
          We take our commitment to our users seriously. If you need our help with your user account, have questions
          about how to use the platform or are experiencing technical difficulties, please do not hesitate to contact
          us.
        </p>
        <p>We are also proud to work with other similar corporations and investors.</p>
      </div>
      <div className={styles.form}>
        <div>
          <form action='' onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Input
                type='text'
                name='userName'
                id='userName'
                placeholder={'User Name'}
                obj={register('userName', {
                  required: { value: true, message: 'User name is required field' }
                })}>
                {'Enter your user name'}
              </Input>
              {errors?.userName && <p className={styles.error}>{errors.userName.message}</p>}
            </div>
            <div>
              <Input
                type='email'
                name='email'
                id='email'
                placeholder={'Email'}
                obj={register('email', {
                  required: { value: true, message: 'Email is required field' },
                  pattern: { value: /^\S+@\S+$/i, message: 'Email is not valid' }
                })}>
                {'Enter your email'}
              </Input>
              {errors?.email && <p className={styles.error}>{errors.email.message}</p>}
            </div>
            <div>
              <Input
                type='text'
                name='subject'
                id='subject'
                placeholder={'Subject'}
                obj={register('subject', {
                  required: { value: true, message: 'Subject is required field' },
                  minLength: { value: 10, message: 'Subject must be at least 10 characters' }
                })}>
                {'Enter your subject'}
              </Input>
              {errors?.subject && <p className={styles.error}>{errors.subject.message}</p>}
            </div>
            <div>
              <label htmlFor='message'>{'Message'}</label>
              <textarea
                id='message'
                placeholder={'Enter your message'}
                {...register('message', {
                  required: { value: true, message: 'Message is required field' },
                  minLength: { value: 20, message: 'Message must be at least 20 characters' }
                })}
              />
              {errors?.message && <p className={styles.error}>{errors.message.message}</p>}
            </div>
            <Button type='submit'>{'Submit'}</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
