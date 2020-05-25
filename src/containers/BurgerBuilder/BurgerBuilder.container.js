import React, { Component } from 'react';

import Aux from '../../hoc/ReactAux';
import Burger from '../../components/Burger/Burger.component';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.component';
import Modal from '../../components/UIElements/Modal/Modal.component';
import OrderSummary from '../../components/OrderSummary/OrderSummary.component';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.2,
    bacon: 1.0
};

class BurgerBuilderContainer extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        showPurchaseModal: false
    };

    addIngredientsHandler = (type) => {
        const updatedCount = this.state.ingredients[type] + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const totalPrice = this.state.totalPrice + priceAddition;
        this.setState({totalPrice: totalPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    };

    removeIngredientsHandler = (type) => {
        if(this.state.ingredients[type] <= 0) {
            return;
        }
        const updatedCount = this.state.ingredients[type] - 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;

        const priceSubtraction = INGREDIENT_PRICES[type];
        const totalPrice = this.state.totalPrice - priceSubtraction;

        this.setState({totalPrice: totalPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    };

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients).map( key => {
            return ingredients[key]
        }).reduce((sum, element) => {
            return sum + element;
        }, 0);
        this.setState({purchasable: sum > 0});
    }

    purchaseModalHandler = () => {
        this.setState({showPurchaseModal: true});
    };

    purchaseModalCancelHandler = () => {
        this.setState({showPurchaseModal: false});
    };

    purchaseModalContinueHandler = () => {
        alert("Continued");
    };

    render () {
        const disabled={...this.state.ingredients};
        for (let key in disabled) {
            disabled[key] = disabled[key] <= 0;
        }

        console.log(disabled);

        return (
            <Aux>
                <Modal showModal={this.state.showPurchaseModal} modalClosed={this.purchaseModalCancelHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        purchaseCancel={this.purchaseModalCancelHandler}
                        purchaseContinue={this.purchaseModalContinueHandler}
                    />
                </Modal>

                <Burger ingredients={this.state.ingredients} />

                <BuildControls
                    totalPrice={this.state.totalPrice}
                    ingredientAdded={this.addIngredientsHandler}
                    ingredientRemoved={this.removeIngredientsHandler}
                    disabled={disabled}
                    purchasable={this.state.purchasable}
                    ingredientPrices={INGREDIENT_PRICES}
                    showPurchaseModal={this.purchaseModalHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilderContainer;