import React from 'react'

import styles from '../../styles/First.module.css'
import { Header } from './Header'
import { Cards } from './Cards'
import stylesCards from '../../styles/Cards.module.css'

function FirstSection(): JSX.Element {
  return (
    <div className={styles.Bodies}>
      <Header />
      <div className={styles.big_body}>
        <div className={styles.text_and_cards}>
          <div className={styles.text}>
            <h1>
              Lorem ipsum malesuada volutpat hendrerit risus, metus integer
            </h1>
            <p>Lorem ipsum malesuada volutpat hendrerit risus</p>
          </div>
          <div className={styles.big_cards}>
            <div className={styles.cards}>
              <Cards>
                <div className={stylesCards.tittle}>
                  <h1>ENEV3</h1>
                  <p>$68,00</p>
                </div>
                <div className={stylesCards.acao}>
                  <h1>2.27%</h1>
                </div>
              </Cards>
            </div>
            <div className={styles.cards}>
              <Cards>
                <div className={stylesCards.tittle}>
                  <h1>VVAR3</h1>
                  <p>$11,87</p>
                </div>
                <div className={stylesCards.red}>
                  <h1>-6.02%</h1>
                </div>
              </Cards>
            </div>
            <div className={styles.cards}>
              <Cards>
                <div className={stylesCards.tittle}>
                  <h1>MGLU3</h1>
                  <p>$24,18</p>
                </div>
                <div className={stylesCards.acao}>
                  <h1>0.50%</h1>
                </div>
              </Cards>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export { FirstSection }
