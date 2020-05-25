import React from 'react';

import Aux from '../../hoc/ReactAux';
import classes from './Layout.styles.css';

const layoutComponent = (props ) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layoutComponent;