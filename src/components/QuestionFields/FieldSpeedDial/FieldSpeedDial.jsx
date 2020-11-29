import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
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
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

const options = [
    {
        icon: <SubjectRoundedIcon />,
        name: 'Text',
        type: FieldType.TEXT,
        handleClick: function (event, props) {
            props.onClick(this.type, event);
        }
    },
    {
        icon: <RadioButtonCheckedIcon />,
        name: 'Radio',
        type: FieldType.RADIO,
        handleClick(event, props) {
            props.onClick(this.type, event);
        }
    },
    {
        icon: <CheckBoxOutlinedIcon />,
        name: 'CheckBox',
        type: FieldType.CHECK_BOX,
        handleClick(event, props) {
            props.onClick(this.type, event);
        }
    },
    {
        icon: <DateRangeRoundedIcon />,
        name: 'Date',
        type: FieldType.DATE,
        handleClick(event, props) {
            props.onClick(this.type, event);
        }
    },
    {
        icon: <ScheduleRoundedIcon />,
        name: 'Time',
        type: FieldType.TIME,
        handleClick(event, props) {
            props.onClick(this.type, event);
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
                    .map((action, index) => (
                        <SpeedDialAction
                            key={index}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            tooltipOpen
                            onClick={(e) => action.handleClick(e, props)}
                        />
                    ))}
            </SpeedDial>
        </div>
    );
}


FieldSpeedDial.defaultProps = {
    onClick: (type, event) => {
        console.log(`default handler of FieldSpeedDial.onClick`);
        console.log(`type='${type}'`);
        console.log(event);
    }
};

export default FieldSpeedDial;
