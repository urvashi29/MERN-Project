import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import AccountCircle from '@material-ui/icons/AccountCircle'
import IconButton from '@material-ui/core/IconButton'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state/index'
import './main.css'

export default class Main extends Component {
    state = {
        open: false,
        anchorEl: null,
        dept: ''
    };

    handleProfileMenuOpen = (e) => {
        this.setState({
            anchorEl: e.currentTarget
        });
    };
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
    handleChange = dept => e => {
        this.setState({
            [dept]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <AppBar position='fixed' color='primary' className='nav-bar'>
                    <div className='typo'>
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {popupState => (
                                <div>
                                    <IconButton
                                        color="inherit"
                                        {...bindTrigger(popupState)}>
                                        <AccountCircle />
                                    </IconButton>
                                    <Menu {...bindMenu(popupState)}>
                                        <NavLink to='/profile'>
                                            <MenuItem onClick={popupState.close}>My Profile</MenuItem>
                                        </NavLink>
                                        <NavLink to='/home'>
                                            <MenuItem onClick={popupState.close}>Logout</MenuItem>
                                        </NavLink>
                                    </Menu>
                                </div>
                            )}
                        </PopupState>
                        {/* <NavLink to='/notification'>
                            <IconButton color="inherit">
                                <NotificationsIcon />
                            </IconButton>
                        </NavLink> */}

                        <div>
                            <NavLink to='/dashboard'>
                                <Button className='dashboard-button' color='inherit' onClick={this.handleClick}>Dashboard</Button>
                            </NavLink>
                        </div>

                        <NavLink to='/aboutpage'>
                            <Button color='inherit'>About</Button>
                        </NavLink>

                        <NavLink to='/homepage'>
                            <Button color='inherit'>Home</Button>
                        </NavLink>

                        {/* sort data for teacher */}


                    </div>
                </AppBar>
            </div>
        )
    }
}