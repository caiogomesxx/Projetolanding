import React from 'react'

import styles from '../../styles/Header.module.css'
import Logo from '../../img/cromada.svg'

function Header(): JSX.Element {
  return(
   <header className={styles.header_body}>
    <div className={styles.items}>
      <div className={styles.logo}>
      </div>
      <div className={styles.button}>
        <button>Integer</button>
        <button>Integer</button>
        <button>Integer</button>
      </div>
    </div>
  </header>
  )
}

export {Header}