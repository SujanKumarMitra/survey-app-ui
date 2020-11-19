import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import cardStyles from '../../utils/MaterialCardStyles';

const Card = (props) => {
    const classes = cardStyles();
    return (
        <>
            <CssBaseline />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                   {props.children}
                </Paper>
            </main>
        </>
    );
};

Card.defaultProps = {
    children: <React.Fragment />
};

export default Card;