import React, { useState, useEffect } from 'react'
import { FaAngleUp } from 'react-icons/fa'
import styles from './ScrollToTop.module.css'

const ScrollToTop = ({ dark }) => {
  const [showTopBtn, setShowTopBtn] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  }, [])
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div className={styles.topToBtm}>
      {showTopBtn && <FaAngleUp className={`${styles.iconPosition} ${styles.iconStyle} ${!dark && styles.clearColor}`} onClick={goToTop} />}
    </div>
  )
}
export default ScrollToTop
