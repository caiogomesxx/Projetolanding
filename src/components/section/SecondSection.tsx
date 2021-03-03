import React from 'react'
import stylesCards from '../../styles/Cards.module.css'
import styles from '../../styles/Second.module.css'
import { Graphc } from '../section/Graphc'
import { Line } from '../section/Line'
import { Cards } from './Cards'

const SecondSection: React.FC = () => {
  return (
    <section id={styles.secondSection}>
      <div className={styles.triangulo}></div>
      <div id={styles.secondSectionTitle}>
        <h1>Por que somos os melhores?</h1>
        <h2>
          Além de sermos a única investidora no mercado que abraça as causas
          ecológicas, possuímos taxas imperdíveis
        </h2>
      </div>
      <div className={styles.contentCards}>
        <Cards white>
          <div className={stylesCards.whiteTitle}>
            <h1>SANB11</h1>
            <p>$38,11</p>
          </div>
          <div className={stylesCards.acao}>
            <h1>3.14%</h1>
          </div>
        </Cards>
        <Cards white>
          <div className={stylesCards.whiteTitle}>
            <h1>VALE3</h1>
            <p>$101,60</p>
          </div>
          <div className={stylesCards.acao}>
            <h1>-3.07%</h1>
          </div>
        </Cards>
        <Cards white>
          <div className={stylesCards.whiteTitle}>
            <h1>AZUL4</h1>
            <p>$38,79</p>
          </div>
          <div className={stylesCards.red}>
            <h1>-3.15%</h1>
          </div>
        </Cards>
      </div>
      <div className={styles.secondSectionMain}>
        <div className={styles.secondSectionMain2}>
          <Line />
          <Graphc />
        </div>
      </div>
    </section>
  )
}

export { SecondSection }
