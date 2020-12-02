import React from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import style from '../../../utils/material-icon.module.css';
import TitleIcon from '@material-ui/icons/Title';
import DescriptionIcon from '@material-ui/icons/Description';
import gridStyles from '../../../utils/MaterialGridStyles';
import Question from '../../ResponseFields/Question/Question';
import cardStyles from './../../../utils/MaterialCardStyles';
import './FormDescriptionField.css';
import { useState } from 'react';

const FormDescriptionField = (props) => {
    const cardClasses = cardStyles();
    const gridClasses = gridStyles();

    const [title, setTitle] = useState(props.defaultTitle);
    const [description, setDescription] = useState(props.defaultDescription);

    const handleTitleChange = (event) => {
        const { value } = event.target;
        setTitle(value === '' ? props.defaultTitle : value);
        props.onTitleChange(value, event);
    }

    const handleDescriptionChange = (event) => {
        const { value } = event.target;
        setDescription(value === '' ? props.defaultDescription : value);
        props.onDescriptionChange(value, event);
    }

    return (
        <>
            <CssBaseline />
            <main className={cardClasses.layout}>
                <Paper className={cardClasses.paper}>
                    <Typography align="center" variant="h5">
                        Create Survey
                    </Typography>
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
                                value={title}
                                onChange={handleTitleChange}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item>
                            <Question
                                icon={<DescriptionIcon className={style.alignMiddle} />}
                                question='Form Description'
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                fullWidth
                                value={description}
                                onChange={handleDescriptionChange}
                                label="Description"
                                multiline
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </main>
        </>
    );
}

FormDescriptionField.defaultProps = {
    defaultTitle: '',
    defaultDescription: '',
    onTitleChange: (title, event) => {
        console.log(`default handler of FormDescriptionField.onTitleChange`);
        console.log(`new title='${title}'`);
        console.log(event);
    },
    onDescriptionChange: (decription, event) => {
        console.log(`default handler of FormDescriptionField.onDescriptionChange`);
        console.log(`new description='${decription}'`);
        console.log(event);
    },
};

export default FormDescriptionField;
