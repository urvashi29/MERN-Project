import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { NavLink } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import './student.css'
import { login } from './Userfunctions'

export default class Student extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            if (res) {
                this.props.history.push(`/dashboard`)
            }
        })
    }
    render() {
        return (
            <div className='student'>
                <span className='typography'>Login</span>
                <br />
                <br />
                <MuiThemeProvider >
                    <TextField className='validate'
                        label="Email Address"
                        variant="outlined"
                        type='email'
                        required="true"
                        onChange={this.onChange}
                    />
                </MuiThemeProvider>
                <br /> <br />
                <MuiThemeProvider >
                    <TextField className='validate'
                        label="Password"
                        type="password"
                        variant="outlined"
                        onChange={this.onChange}
                        required="true"
                    />
                </MuiThemeProvider>
                <br />
                {/* conditional rendering */}
                {/* database fetch */}
                <p>Forget Password ?  &nbsp;&nbsp;&nbsp;&nbsp;
                <NavLink to='/dashboard'>
                        <Button color='primary'>Login</Button>
                    </NavLink>
                </p>
                <p>
                    Don't have an account ?
                    <NavLink to='/signup'>
                        <Button color='primary' onClick={this.handleClickSecond}>
                            SignUp
               </Button>
                    </NavLink>
                </p>
                <p className='policy'>By creating this account, you agree to our Privacy Policy & Cookie Policy.</p>
            </div >
        )
    }
}