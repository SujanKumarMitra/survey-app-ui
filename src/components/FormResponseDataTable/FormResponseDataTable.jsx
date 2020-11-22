import { Button, Grid, TablePagination } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { useState } from 'react';
import './FormResponseDataTable.css';


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

const FormResponseDataTable = (props) => {
    const classes = useStyles();
    const [tableData, setTableData] = useState({
        page: 0,
        columns: props.columns,
        totalCount: props.data.length,
        countPerPage: 5,
        fullData: props.data,
        ...props,
        renderingData() {
            return this.fullData.slice(this.page * this.countPerPage, (this.page + 1) * this.countPerPage)
        },
    });
    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            {tableData.columns.map((column, index) => (
                                <StyledTableCell key={index} align="center">{column}</StyledTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.renderingData().map((row, index) => (
                            <StyledTableRow key={index}>
                                {row.map((cell, index) => (
                                    <StyledTableCell key={index} align="center">{cell}</StyledTableCell>
                                ))}
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid container direction="row" alignItems="center" justify="center" spacing={5}>
                <Grid item>
                    <TablePagination
                        rowsPerPageOptions={[2, 5, 10, 15, 20, 25, 50, 100]}
                        count={tableData.totalCount}
                        rowsPerPage={tableData.countPerPage}
                        page={tableData.page}
                        onChangePage={(event, page) => {
                            console.log(page);
                            setTableData({
                                ...tableData,
                                page: page,
                            })
                        }}
                        onChangeRowsPerPage={(event) => {
                            const { value: rowsPerPage } = event.target;
                            setTableData({
                                ...tableData,
                                countPerPage: rowsPerPage,
                                page: 0,
                            })
                        }}
                    />
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary">Download CSV</Button>
                </Grid>
            </Grid>
        </>
    );
}


FormResponseDataTable.defaultProps = {
    columns: [
        'Column1',
        'Column2',
        'Column3',
        'Column4',
        'Column5',
    ],

    data: [[
        'cell-11',
        'cell-12',
        'cell-13',
        'cell-14',
        'cell-15'
    ],
    [
        'cell-21',
        'cell-22',
        'cell-23',
        'cell-24',
        'cell-25'
    ],
    [
        'cell-31',
        'cell-32',
        'cell-33',
        'cell-34',
        'cell-35'
    ],
    [
        'cell-41',
        'cell-42',
        'cell-43',
        'cell-44',
        'cell-45'
    ],
    [
        'cell-51',
        'cell-52',
        'cell-53',
        'cell-54',
        'cell-55'
    ],
    [
        'cell-61',
        'cell-62',
        'cell-63',
        'cell-64',
        'cell-65'
    ],
    [
        'cell-71',
        'cell-72',
        'cell-73',
        'cell-74',
        'cell-75'
    ],
    [
        'cell-81',
        'cell-82',
        'cell-83',
        'cell-84',
        'cell-85'
    ],
    [
        'cell-91',
        'cell-92',
        'cell-93',
        'cell-94',
        'cell-95'
    ],
    ]
};

export default FormResponseDataTable;
