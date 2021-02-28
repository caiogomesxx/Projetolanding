import React from 'react'
import styles from '../../styles/components/Card.module.css'
interface CardProps {
  title: string
}

export default function Card(): JSX.Element {
  return (
    <div className={styles.cardContent}>
      <div className={styles.textContent}>
        <h1 className={styles.textName}>Day Trade</h1>
        <p className={styles.textDesc}>Operações diárias alavancadas</p>
      </div>
      <div className={styles.valueContent}>
        <p className={styles.textBeforeValue}>R$ 0,00</p>
        <h1 className={styles.textActuallyValue}>R$ 0,00</h1>
      </div>
    </div>
  )
}
