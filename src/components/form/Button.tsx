import React from 'react'
import styles from '../../styles/components/forms/Button.module.css'

interface IButtonProps {
  disabled: boolean
}

const Button: React.FC = ({ children }, { disabled }: IButtonProps) => {
  return (
    <button disabled={disabled} className={styles.button}>
      {children}
    </button>
  )
}

export { Button }
