import dynamic from 'next/dynamic'
import React from 'react'
import styles from '../../styles/Profile.module.css'
import Card from '../shared/Card'

const ReactCardCarousel = dynamic(() => import('react-card-carousel'), {
  ssr: false
})

export default function ProfileSection(): JSX.Element {
  return (
    <section style={{ position: 'relative' }}>
      <h1 className={styles.title}>
        Quem são os responsáveis pelas riquezas do patinhas
      </h1>
      <div className={styles.relativeCardContainer}>
        <ReactCardCarousel spread="wide" autoplay={true} autoplay_speed={2500}>
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
        </ReactCardCarousel>
      </div>
    </section>
  )
}
