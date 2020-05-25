import React from 'react';

import classes from './BuildControls.styles.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
        <button className={classes.More} onClick={props.added}>More</button>
        <p> + ${props.ingredientPrice}</p>

    </div>
);

export default buildControl;