import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import './ConfirmDialogBox.css';

const ConfirmDialogBox = (props) => {
    
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Dialog
                fullScreen={fullScreen}
                open={props.open}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{props.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {props.description}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={props.onCancel} color="primary">
                        Cancel
            </Button>
                    <Button onClick={props.onConfirm} color="primary" autoFocus>
                        Confirm
            </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

ConfirmDialogBox.defaultProps = {
    title: 'Are you sure?',
    description: 'Are you sure, you want to submit',
    onConfirm: (event) => {
        console.log("confirm clicked");
        console.log(event);
    },
    onCancel: (event) => {
        console.log("cancel clicked");
        console.log(event);
    }

};

export default ConfirmDialogBox;
