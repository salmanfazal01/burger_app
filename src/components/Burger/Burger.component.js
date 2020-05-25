import React from 'react';

import classes from './Burger.styles.css';
import BurgerIngredientComponent from './BurgerIngredient/BurgerIngredient.component';

const burgerComponent = (props ) => {
    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                return <BurgerIngredientComponent key={igKey + i} type={igKey} />;
            } );
        } )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredientComponent type="bread-top" />
            {transformedIngredients}
            <BurgerIngredientComponent type="bread-bottom" />
        </div>
    );
};

export default burgerComponent;