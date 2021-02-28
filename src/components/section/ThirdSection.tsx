import React from 'react'
import styles from '../../styles/Third.module.css'
import Card from '../shared/Card'

export default function ThirdSection(): JSX.Element {
  return (
    <section>
      <h1 className={styles.title}>Quais são nossas vantagens?</h1>
      <article className={styles.cardContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </article>
    </section>
  )
}
