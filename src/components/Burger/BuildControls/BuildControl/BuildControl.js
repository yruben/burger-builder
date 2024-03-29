import React from 'react'
import styles from './BuildControl.module.css'

const buildControl = (props) => (
    <div className={styles.BuildControl}>
        <div className={styles.Label}>{props.label}</div>
        <button
          onClick={props.removed}
          className={styles.Less}
          disabled={props.disabled}
        >Less</button>
        <button
          onClick={props.added}
          className={styles.More}>More</button>
    </div>
);

export default buildControl