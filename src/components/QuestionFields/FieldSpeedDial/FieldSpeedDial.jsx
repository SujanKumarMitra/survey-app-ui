import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import ScheduleRoundedIcon from '@material-ui/icons/ScheduleRounded';
import SubjectRoundedIcon from '@material-ui/icons/SubjectRounded';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import FieldType from "../../../services/FieldType";
import './FieldSpeedDial.css';


const useStyles = makeStyles((theme) => ({
    root: {
        height: 380,
        transform: 'translateZ(0px)',
        flexGrow: 1,
    },
    speedDial: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

const options = [
    {
        icon: <ScheduleRoundedIcon />,
        name: 'Time',
        type: FieldType.TIME,
        handleClick(event) {
            console.log(this.type);
        }
    },
    {
        icon: <DateRangeRoundedIcon />,
        name: 'Date',
        type: FieldType.DATE,
        handleClick(event) {
            console.log(this.type);
        }
    },
    {
        icon: <CheckCircleOutlineRoundedIcon />,
        name: 'CheckBox',
        type: FieldType.CHECKBOX,
        handleClick(event) {
            console.log(this.type);
        }
    },
    {
        icon: <RadioButtonCheckedIcon />,
        name: 'Radio',
        type: FieldType.RADIO,
        handleClick(event) {
            console.log(this.type);
        }
    },
    {
        icon: <SubjectRoundedIcon />,
        name: 'Text',
        type: FieldType.TEXT,
        handleClick: function (event) {
            console.log(this.type);
        }
    },
];

const FieldSpeedDial = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <div>
            <SpeedDial
                ariaLabel="SpeedDial tooltip example"
                className={classes.speedDial}
                icon={<SpeedDialIcon />}
                onClick={handleClick}
                open={open}
            >
                {options
                    .map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            tooltipOpen
                            onClick={(e) => action.handleClick(e)}
                        />
                    ))}
            </SpeedDial>
        </div>
    );
}


FieldSpeedDial.defaultProps = {};

export default FieldSpeedDial;
