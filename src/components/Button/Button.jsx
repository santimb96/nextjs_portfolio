import React, { useContext } from 'react'
import { BackgroundContext } from '../../../contexts/BackgroundContext'
import styles from './Button.module.css'

const Button = ({ Icon = null, text = null, handle = null }) => {
  const { dark } = useContext(BackgroundContext)
  return (
    <button className={`${styles.button} ${!dark && styles.clearColor}`} {...(handle && { onClick: handle })}>
      {Icon && <Icon />}
      {text && text}
    </button>
  )
}

export default Button
