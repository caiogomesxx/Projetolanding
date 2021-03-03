import React, { ReactNode } from 'react';

import styles from '../../styles/Button.module.css';

interface IButtonProps {
  children: ReactNode,
  disabled: boolean,
}

function Button ({ children, disabled }: IButtonProps): JSX.Element {
  return <button disabled={disabled} className={styles.button}>{children}</button>;
}

export { Button }