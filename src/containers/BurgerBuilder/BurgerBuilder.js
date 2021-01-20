import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
  salad: 0.6,
  cheese: 1.8,
  meat: 2.2,
  bacon: 0.9
}

class BurgerBuilder extends Component{
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 2,
    purchasable: false
  }

  updatePurchaseState = (ingredients) =>{
    const sum = Object.keys(ingredients)
      .map((ingKey) => ingredients[ingKey])
      .reduce((acc, elem) => acc + elem)
    this.setState({purchasable : sum > 0})
  }

  addIngredientHandler =(type)=>{
    const newCount = this.state.ingredients[type] + 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = newCount
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type]
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    this.updatePurchaseState(updatedIngredients)
  }

  removeIngredientHandler = (type) =>{
    if(!this.state.ingredients[type]) return
    const newCount = this.state.ingredients[type] - 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = newCount
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type]
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    this.updatePurchaseState(updatedIngredients)
  }
  render() {
    const disabledInfo = {
      ...this.state.ingredients
    }
    for (let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] === 0
    }
    return(
      <>
        <Burger ingredients = {this.state.ingredients}/>
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          totalPrice ={this.state.totalPrice}
          purchasable={this.state.purchasable}
        />
      </>
    )
  }
}

export default BurgerBuilder