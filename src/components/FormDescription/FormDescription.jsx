import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import cardStyles from './../../utils/MaterialCardStyles';
import './FormDescription.css';
import required from './../../utils/RequiredFragment';

const FormDescription = (props) => {
    const classes = cardStyles();
    return (
        <>
            <CssBaseline />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">
                        {props.title}
                    </Typography>
                    <Typography variant="body1" >
                        {props.description}
                    </Typography>
                    <br />
                    <Typography variant="body2" >
                        Note: Required fields are marked with {required(true)}
                    </Typography>
                </Paper>
            </main>
        </>
    );
}

FormDescription.defaultProps = {
    title: 'Anonymous',
    description: 'No Description Available'
};

export default FormDescription;
