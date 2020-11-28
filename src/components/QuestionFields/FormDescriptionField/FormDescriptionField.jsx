import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import style from '../../../utils/material-icon.module.css';
import TitleIcon from '@material-ui/icons/Title';
import DescriptionIcon from '@material-ui/icons/Description';
import gridStyles from '../../../utils/MaterialGridStyles';
import Question from '../../ResponseFields/Question/Question';
import cardStyles from './../../../utils/MaterialCardStyles';
import './FormDescriptionField.css';

const FormDescriptionField = (props) => {
    const cardClasses = cardStyles();
    const gridClasses = gridStyles();
    return (
        <>
            <CssBaseline />
            <main className={cardClasses.layout}>
                <Paper className={cardClasses.paper}>
                    <Grid
                        container
                        direction="column"
                        className={gridClasses.root}
                        spacing={2}>
                        <Grid item>
                            <Question
                                icon={<TitleIcon className={style.alignMiddle} />}
                                question='Form Title' />
                        </Grid>
                        <Grid item>
                            <TextField
                                fullWidth
                                label="Title"
                                variant="outlined" />
                        </Grid>
                        <Grid item>
                            <Question
                                icon={<DescriptionIcon className={style.alignMiddle} />}
                                question='Form Description' />
                        </Grid>
                        <Grid item>
                            <TextField
                                fullWidth
                                label="Description"
                                multiline
                                variant="outlined" />
                        </Grid>
                    </Grid>
                </Paper>
            </main>
        </>
    );
}

FormDescriptionField.defaultProps = {};

export default FormDescriptionField;
