import React from 'react'
import styles from '../../styles/Cards.module.css'

interface CardProps {
  white?: boolean
}

export const Cards: React.FC<CardProps> = ({ children, white }) => {
  return (
    <div className={white ? styles.whiteCard : styles.greenCard}>
      {children}
    </div>
  )
}
