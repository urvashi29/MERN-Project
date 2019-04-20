import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle'
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import './Navigate.css'

class Navigate extends Component {
    state = {
        open: false,
        op: false
    }
    handleClick = (e) => {
        this.setState({
            open: true
        })
    }
    handleClose = () => {
        this.setState({
            open: false
        })
    }
    handleCloseSecond = () => {
        this.setState({
            op: false
        })
    }
    handleClickSecond = (e) => {
        this.setState({
            op: true
        })
    }
    render() {
        return (
            <div>
                <AppBar position='fixed' color='primary' className='nav-bar'>
                    <div className='typo'>
                        {/* open student database */}
                        <form>
                            <Button color='inherit' onClick={this.handleClick}><span>Login&SignUp</span></Button>

                            <Dialog className='dialog'
                                open={this.state.open}
                                onClose={this.handleClose}
                            >
                                <DialogTitle id='form-dialog-title'>
                                    <span className='typography'>F'TECH'T</span>
                                </DialogTitle>
                                <DialogContent>
                                    <Button color='primary'>Teacher</Button>
                                    <NavLink to='/studentlogin'>
                                        <Button color='primary'>Student</Button>
                                    </NavLink>
                                </DialogContent>
                            </Dialog>

                        </form>

                        <NavLink to='/about'>
                            <Button color='inherit'>About</Button>
                        </NavLink>

                        <NavLink to='/home'>
                            <Button color='inherit'>Home</Button>
                        </NavLink>
                    </div>
                </AppBar>
            </div>
        )
    }
}

export default withRouter(Navigate);