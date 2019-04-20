import React, { Component } from 'react'
import timetable from './download.png'
import './dashbaord.css'
import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
import Grid from '@material-ui/core/Grid';
export default class Dashboard extends Component {
    state = {
        open: false,
        op: false,
        dept: '',
        openModal: false,
        selectedDate: new Date('2014-08-18T21:11:54'),
    };

    handleDateChange = (date) => {
        this.setState({ selectedDate: date });
    };
    handleClick = (e) => {
        this.setState({
            open: true
        })
    }
    handleClose = (e) => {
        this.setState({
            open: false
        })
    }
    handleOnClick = (e) => {
        this.setState({
            op: true
        })
    }
    handleOnClose = (e) => {
        this.setState({
            op: false
        })
    }
    handleChange = dept => e => {
        this.setState({
            [dept]: e.target.value
        })
    }
    handleClickModal = (e) => {
        this.setState({
            openModal: true
        })
    }
    handleCloseModal = () => {
        this.setState({
            openModal: false
        })
    }
    render() {
        const { selectedDate } = this.state;
        return (
            <div className='main-dashboard'>
                <div>
                    <NavLink to='/location'>
                        <h1>Location</h1>
                    </NavLink>
                </div>
                <div>
                    <h1 onClick={this.handleClick}>Timetable</h1>
                    <Dialog className='dialog'
                        open={this.state.open}
                        onClose={this.handleClose}>
                        <DialogTitle id='form-dialog-title'>
                            <span className='typography'>F'TECH'T</span>
                        </DialogTitle>
                        <img src={timetable} alt='timetable' />
                    </Dialog>
                </div>
                <div>
                    <h1 onClick={this.handleOnClick}>Availability</h1>
                    <Dialog className='dialog'
                        open={this.state.op}
                        onClose={this.handleOnClose}
                    >
                        <DialogTitle id='form-dialog-title'>
                            <span className='typography'>F'TECH'T</span>
                            <br />
                            {/* database value */}
                            <span>yes Available</span>
                            <br />
                            <br />
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-around">
                                    <DatePicker
                                        margin="normal"
                                        label="Set Date"
                                        value={selectedDate}
                                        onChange={this.handleDateChange}
                                    />
                                    <TimePicker
                                        margin="normal"
                                        label="Set Time"
                                        value={selectedDate}
                                        onChange={this.handleDateChange}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
                            <Button color='primary'>OK</Button>
                        </DialogTitle>
                    </Dialog>
                </div>
                <div>
                    <NavLink to='/search'>
                        <h1 onClick={this.handleClickModal}>Search</h1>
                    </NavLink>
                </div>
            </div>
        )
    }
}
