import React from 'react';

import styles from '../../styles/Input.module.css';

const Input: React.FC = () => {
  return(
   <div>
      <input className={styles.input} placeholder="Um placeholder bom ae meui"/>
   </div>
  );
}

export { Input }