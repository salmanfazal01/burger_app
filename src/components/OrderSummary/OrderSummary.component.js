import React from 'react';

import Aux from '../../hoc/ReactAux';
import Button from "../UIElements/Button/Button.component";

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients).map(key => {
        return (<li key={key}>
            <span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}
        </li>);
    });

    return (
        <Aux>
            <h3>Your Order</h3>

            <p>Delicious burger with the following ingredients:</p>

            <ul>
                {ingredientSummary}
            </ul>

            <p>Continue to Checkout?</p>

            <Button btnType="Danger" clicked={props.purchaseCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;