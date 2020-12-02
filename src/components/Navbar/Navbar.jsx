import { AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
const Navbar = (props) => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography color="inherit" variant="h6" className={classes.title}>
                    <Button href="/" color="inherit" >
                        Anonymous Surveys
                    </Button>
                </Typography>
                <Button href="/survey" color="inherit" >
                    Create A Survey
                </Button>
                <Button href="/responses" color="inherit" >
                    View Survey Responses
                </Button>
            </Toolbar>
        </AppBar>
    );
}

Navbar.propTypes = {};

export default Navbar;
