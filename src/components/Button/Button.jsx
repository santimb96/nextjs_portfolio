import React, { useContext } from 'react'
import { BackgroundContext } from '../../../contexts/BackgroundContext'
import styles from './Button.module.css'

const Button = ({ Icon = null, text = null, handle = null, width = 125, height = 35 }) => {
  const { dark } = useContext(BackgroundContext)
  return (
    <button className={`${styles.button} ${dark && styles.darkColor}`} style={{ width, height }} {...(handle && { onClick: handle })}>
      {Icon && <Icon />}
      {text && text}
    </button>
  )
}

export default Button
