import React from 'react';

import classes from './Button.styles.css';

const Button = (props) => (
    <button onClick={props.clicked} className={[classes.Button, classes[props.btnType]].join(' ')}>
        {props.children}
    </button>
);

export default Button;