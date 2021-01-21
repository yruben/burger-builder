import React from 'react'

const OrderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span
            style={{textTransform: 'capitalize'}}>
            {igKey}
          </span>
          :{props.ingredients[igKey]}
        </li>
      )
    })
  return (
    <>
      <h3>Your ORDER!!!</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientsSummary}
      </ul>
      <p>Continue to CheckOut???</p>
      <button>CANCEL</button>
      <button>CONTINUE</button>
    </>
  )
}

export default OrderSummary