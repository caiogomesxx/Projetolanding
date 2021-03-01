import React from 'react'
import styles from '../../styles/Third.module.css'
import Card from '../shared/Card'

export default function ThirdSection(): JSX.Element {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Por que investir com o Patinhas?</h1>
      <article className={styles.cardContainer}>
        <Card
          title="Day Trade"
          desc="Operações diárias alavancadas"
          beforeValue={1}
          actuallyValue={0}
        />
        <Card
          title="Day Trade"
          desc="Operações diárias alavancadas"
          beforeValue={1}
          actuallyValue={0}
        />
        <Card
          title="Day Trade"
          desc="Operações diárias alavancadas"
          beforeValue={1}
          actuallyValue={0}
        />
        <Card
          title="Day Trade"
          desc="Operações diárias alavancadas"
          beforeValue={1}
          actuallyValue={0}
        />
        <Card
          title="Day Trade"
          desc="Operações diárias alavancadas"
          beforeValue={1}
          actuallyValue={0}
        />
        <Card
          title="Day Trade"
          desc="Operações diárias alavancadas"
          beforeValue={1}
          actuallyValue={0}
        />
      </article>
    </section>
  )
}
