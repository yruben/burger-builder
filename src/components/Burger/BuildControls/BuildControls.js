import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import styles from './BuildControls.module.css'

const controls = [
  {label:'Salad', type:'salad'},
  {label:'Bacon', type:'bacon'},
  {label:'Cheese', type:'cheese'},
  {label:'Meat', type:'meat'}
]

const BuildControls = (props) => {
  return (
    <div className={styles.BuildControls}>
      <p>Current Price: {props.totalPrice.toFixed(2)}</p>
      {controls.map( ctrl =>
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added = {() => props.ingredientAdded(ctrl.type)}
          removed = {() => props.ingredientRemoved(ctrl.type)}
          disabled ={props.disabled[ctrl.type]}
        />)
      }
      <button
        className={styles.OrderButton}
        disabled={!props.purchasable}
      > ORDER NOW!!! </button>
    </div>
  )
}

export  default BuildControls