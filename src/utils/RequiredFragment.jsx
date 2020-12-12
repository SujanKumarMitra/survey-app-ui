import red from '@material-ui/core/colors/red';
const required = (value) => {
    return value ?
    <span style={{
        color: red[500]
    }}>*</span>
    :
    <></>;
};

export default required;