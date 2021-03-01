import React from 'react'
import styles from '../../styles/Cards.module.css'

function Cards({ children }): JSX.Element {
  return <div className={styles.card}>{children}</div>
}

export { Cards }
