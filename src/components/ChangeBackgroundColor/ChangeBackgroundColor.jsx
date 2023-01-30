import React, { useContext } from 'react'
import { BackgroundContext } from '../../../contexts/BackgroundContext'
import { BsFillSunFill } from 'react-icons/bs'
import { MdDarkMode } from 'react-icons/md'
import styles from './ChangeBackgroundColor.module.css'

const ChangeBackgroundColor = () => {
  const { dark, setDark } = useContext(BackgroundContext)
  return (
    <button onClick={() => setDark(!dark)} className={`${styles.changeColor} ${!dark && styles.darkColor}`}>
      {dark ? <BsFillSunFill /> : <MdDarkMode />}
    </button>
  )
}

export default ChangeBackgroundColor
