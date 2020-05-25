import React from 'react';

import classes from './Modal.styles.css';
import Aux from '../../../hoc/ReactAux';
import Backdrop from "../Backdrop/Backdrop.component";

const modal = (props) => (
    <Aux>
        <Backdrop showBackdrop={props.showModal} clicked={props.modalClosed}/>

        <div className={classes.Modal} style={{display: props.showModal ? 'block' : 'none'}}>
            {props.children}
        </div>
    </Aux>
);

export default modal;